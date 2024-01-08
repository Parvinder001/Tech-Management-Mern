import { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { useAuth } from "../storage/auth";
import { toast } from "react-toastify";
export const Login = () => {
  const Login_Url = "http://localhost:8000/api/auth/login";
  const navigate = useNavigate();
  const { StoreTokenInLS } = useAuth();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(Login_Url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const loginResponse = await response.json();

      if (response.ok) {
        StoreTokenInLS(loginResponse.Token);
        setuser({
          email: "",
          password: "",
        });
        toast.success(loginResponse.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        if (loginResponse.isAdmin == true) {
          navigate("/admin/users");
        }
        if (loginResponse.isAdmin == false) {
          navigate("/");
        }
      } else {
        toast.error(loginResponse.message, {
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
      console.log(error.message, error);
    }
  };
  return (
    <section>
      <main>
        <div className="register-main">
          <div className="login-image">
            <img src="/public/images/login.png" />
          </div>
          <div className="register-form">
            <div className="register-from-heading">
              <span>Login Form</span>
            </div>
            <div className="register-form">
              <form onSubmit={formHandler}>
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
                  <input className="Submitbtn" type="submit" value="LOGIN" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
