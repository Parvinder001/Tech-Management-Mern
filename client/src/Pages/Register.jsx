import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Register = () => {
  const Navigation = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const getResponse = await response.json();
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success(getResponse.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        Navigation("/");
      } else {
        toast.error(getResponse.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="register-main">
            <div className="register-image" width="500">
              <img src="/public/images/task-registration.png" />
            </div>
            <div className="register-form">
              <div className="register-from-heading">
                <span>Register Form</span>
              </div>
              <div className="register-form">
                <form onSubmit={formHandler}>
                  <div className="form-input">
                    <label className="form-lable" htmlFor="username">
                      UserName :
                    </label>
                    <input
                      type="text"
                      name="username"
                      onChange={changeHandler}
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="form-input">
                    <label className="form-lable" htmlFor="username">
                      Email :
                    </label>
                    <input
                      type="email"
                      name="email"
                      onChange={changeHandler}
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="form-input">
                    <label className="form-lable" htmlFor="username">
                      Phone :
                    </label>
                    <input
                      type="number"
                      name="phone"
                      onChange={changeHandler}
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="form-input">
                    <label className="form-lable" htmlFor="username">
                      Password :
                    </label>
                    <input
                      type="password"
                      name="password"
                      onChange={changeHandler}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="form-input">
                    <label className="form-lable" htmlFor="username"></label>
                    <input className="Submitbtn" type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
