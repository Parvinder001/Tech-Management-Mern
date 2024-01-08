import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../storage/auth";
import { toast } from "react-toastify";
function UpdateUserData() {
  const params = useParams();
  const { userAuthenticationToken } = useAuth();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const GetSingleUserData = async () => {
    try {
      const SingleUser = await Axios.get(
        `http://localhost:8000/api/admin/single-user/${params.id}`,
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );

      if (SingleUser.data.success === true) {
        setUserData(SingleUser.data.userData);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    GetSingleUserData();
  }, []);
  const InputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.patch(
        `http://localhost:8000/api/admin/update-user/${params.id}`,
        userData,
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );
      if (response.data.success) {
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
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container" style={{ width: "500px", margin: "auto" }}>
        <div className="User-form">
          <h2>Update User Data</h2>
          <form
            onSubmit={handleSubmit}
            style={{ width: "400px", margin: "0 auto" }}
          >
            <label>
              Username:
              <input
                type="text"
                name="username"
                onChange={InputHandler}
                value={userData.username}
                style={{ marginBottom: "10px", width: "400px", padding: "5px" }}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                onChange={InputHandler}
                value={userData.email}
                style={{ marginBottom: "10px", width: "400px", padding: "5px" }}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="phone"
                onChange={InputHandler}
                value={userData.phone}
                style={{ marginBottom: "20px", width: "400px", padding: "5px" }}
              />
            </label>
            <button
              type="submit"
              style={{
                marginBottom: "15px",
                width: "100%",
                padding: "8px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUserData;
