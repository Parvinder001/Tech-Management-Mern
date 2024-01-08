import { Link, Outlet, Navigate } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { RiContactsBook2Line } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useAuth } from "../../storage/auth";
const AdminLayouts = () => {
  const { User, Loding } = useAuth();
  if (Loding) {
    return <h1>Loding....</h1>;
  }
  if (!User.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">Mern Stack</a>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/admin/users">
                  <LuUsers />
                  User
                </Link>
              </li>
              <li>
                <Link to="/admin/contact">
                  <RiContactsBook2Line />
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/admin/service">
                  <MdOutlineMiscellaneousServices />
                  Service
                </Link>
              </li>
              <li>
                <Link to="/admin/users">Home</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default AdminLayouts;
