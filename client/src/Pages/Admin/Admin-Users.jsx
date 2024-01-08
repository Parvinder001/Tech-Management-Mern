import Axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../storage/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
const AdminUsers = () => {
  const [user, setUsers] = useState("");
  const { userAuthenticationToken } = useAuth();
  const getAllUsers = async () => {
    try {
      const user = await Axios.get(
        "http://localhost:8000/api/admin/user-list",
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );
      setUsers(user.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      const response = await Axios.delete(
        `http://localhost:8000/api/admin/delete-user/${id}`,
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        getAllUsers();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <NavLink
                      to={`/admin/user/${user._id}/edit`}
                      className="btn btn-primary"
                    >
                      Edit
                    </NavLink>
                    &nbsp;&nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default AdminUsers;
