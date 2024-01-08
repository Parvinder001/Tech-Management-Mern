import { useEffect, useState } from "react";
import Axios from "axios";
import { useAuth } from "../../storage/auth";
import DeleteConfirmation from "./DeleteButton";
const AdminContact = () => {
  const [Contact, setContact] = useState([]);
  const { userAuthenticationToken } = useAuth();
  const [Count, setCount] = useState(1);
  const [deleteContact, setDeleteContact] = useState(false);
  const getUserContactData = async () => {
    try {
      const ContactData = await Axios.get(
        "http://localhost:8000/api/admin/contact-query-list",
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );
      if (ContactData.data.success) {
        setContact(ContactData.data.ContactList);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getUserContactData();
    setDeleteContact(false);
  }, [deleteContact]);
  return (
    <>
      <div className="tittle" style={{ width: "100%", textAlign: "center" }}>
        <h1>Admin contact</h1>
      </div>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {Contact &&
                Contact.map((CurrentContactData, index) => {
                  const { _id, name, email, message } = CurrentContactData;
                  const increment = Count + index;
                  return (
                    <tr key={index}>
                      <th scope="row">{increment}</th>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{message}</td>
                      <td>
                        <DeleteConfirmation
                          onDelete={_id}
                          setDeleteContact={setDeleteContact}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AdminContact;
