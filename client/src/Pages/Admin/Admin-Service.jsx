import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const AdminService = () => {
  const [Service, setService] = useState({
    service: "",
    description: "",
    price: "",
    provider: "",
  });
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setService({ ...Service, [name]: value });
  };
  const addService = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/add-service",
        Service
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
      }
      setService({ service: "", description: "", price: "", provider: "" });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="container" style={{ justifyContent: "center" }}>
        <div className="row">
          <h1
            style={{
              marginBottom: "30px",
              paddingTop: "0px",
              textAlign: "center",
            }}
          >
            Add Service
          </h1>
          <div className="col-2 offset-3">
            <label>Service Name</label>
          </div>
          <div className="col-6">
            <input
              type="text"
              name="service"
              value={Service.service}
              className="form-control"
              placeholder="Enter Service Name"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-2 offset-3">
              <label>Service description</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                name="description"
                value={Service.description}
                className="form-control"
                placeholder="Enter Service description"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-2 offset-3">
              <label>Price</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                name="price"
                value={Service.price}
                className="form-control"
                placeholder="Enter Service price"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-2 offset-3">
              <label>Service Provider</label>
            </div>
            <div className="col-6">
              <input
                type="text"
                name="provider"
                value={Service.provider}
                className="form-control"
                placeholder="Enter Service provider"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-2 offset-5">
              <button className="btn btn-primary" onClick={addService}>
                Add Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminService;
