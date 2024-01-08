import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import PageNotFound from "./Pages/PageNotFound";
import { Logout } from "./Pages/Logout";
import { useAuth } from "./storage/auth";
import AdminLayouts from "./components/Layouts/Admin-Layouts";
import AdminUsers from "./Pages/Admin/Admin-Users";
import AdminContact from "./Pages/Admin/Admin-Contact";
import AdminService from "./Pages/Admin/Admin-Service";
import UpdateUserData from "./Pages/Admin/UpdateUserData";
function App() {
  const { IslogedIn, User } = useAuth();
  return (
    <>
      <BrowserRouter>
        {!User.isAdmin == undefined || !User.isAdmin ? <Navbar /> : null}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={IslogedIn ? <Home /> : <Login />} />
          <Route
            path="/register"
            element={IslogedIn ? <Home /> : <Register />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/admin" element={<AdminLayouts />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="service" element={<AdminService />} />
            <Route path="user/:id/edit" element={<UpdateUserData />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
