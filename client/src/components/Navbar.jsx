import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../storage/auth";
const Navbar = () => {
  const { IslogedIn } = useAuth();
  return (
    <>
      <div className="container ">
        <div className="logo-brand">
          <a href="/">Mern Stack</a>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            {IslogedIn ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
