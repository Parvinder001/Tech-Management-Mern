import { useState } from "react";
import { useAuth } from "../storage/auth";
import { toast } from "react-toastify";
const Contact = () => {
  const { User } = useAuth();
  const [userDeatils, setuserDeatils] = useState(true);
  const [contactForm, setcontactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  if (userDeatils && User) {
    setcontactForm({
      name: User.username,
      email: User.email,
      message: "",
    });
    setuserDeatils(false);
  }

  const onChangehandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcontactForm({
      ...contactForm,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const contactResponse = await fetch(
        `http://localhost:8000/api/form/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactForm),
        }
      );
      if (contactResponse.ok) {
        const getmsg = await contactResponse.json();
        setcontactForm({ name: "", email: "", message: "" });
        toast.success(getmsg.message, {
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
      console.log(error);
    }
  };
  return (
    <main>
      <section>
        <div className="contactUs-main">
          <div className="contact-banner">
            <img
              src="./images/contact-us.png"
              width={500}
              alt="Contact us banner image"
            />
          </div>
          <div className="contact-form">
            <form onSubmit={onSubmitHandler}>
              <div className="form-username">
                <label>Username:</label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={onChangehandler}
                  placeholder="Please Enter Username"
                />
              </div>
              <div className="form-email">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={onChangehandler}
                  placeholder="Please Enter Email"
                />
              </div>
              <div className="form-message">
                <label>Message:</label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={onChangehandler}
                  cols={5}
                  rows={5}
                ></textarea>
              </div>
              <div className="form-submit-btn">
                <label></label>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27751.09405615869!2d78.32359260652137!3d29.606978059356962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bdf0a3da46f5d%3A0xd4a95803f2e9f34e!2sNajibabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1701475310592!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="MapConatcus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
