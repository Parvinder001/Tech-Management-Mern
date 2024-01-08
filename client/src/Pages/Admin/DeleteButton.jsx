import Axios from "axios";
import { useState } from "react";
import { useAuth } from "../../storage/auth";
import { toast } from "react-toastify";
const DeleteConfirmation = ({ onDelete, setDeleteContact }) => {
  const { userAuthenticationToken } = useAuth();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Show confirmation popup
    setShowConfirmation(true);
  };

  const confirmDelete = async () => {
    try {
      const DeleteResponse = await Axios.delete(
        `http://localhost:8000/api/admin/delete-contact-query-list/${onDelete}`,
        {
          headers: {
            Authorization: userAuthenticationToken,
          },
        }
      );
      if (DeleteResponse.data.success) {
        setDeleteContact(true);
        toast.success(DeleteResponse.data.message, {
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
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    // Hide confirmation popup if cancel is clicked
    setShowConfirmation(false);
  };

  return (
    <div>
      {!showConfirmation && (
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      )}

      {/* Render confirmation popup if showConfirmation is true */}
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Are you sure you want to delete?</p>
          <button
            className="btn btn-success"
            style={{ marginRight: "10px" }}
            onClick={confirmDelete}
          >
            Yes
          </button>

          <button className="btn btn-danger" onClick={cancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteConfirmation;
