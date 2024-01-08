import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [Token, setToken] = useState(localStorage.getItem("Token"));
  const [Services, setService] = useState("");
  const [User, setUser] = useState("");
  const [Loding, setLoding] = useState(true);

  const StoreTokenInLS = (getToken) => {
    setToken(true);
    return localStorage.setItem("Token", getToken);
  };

  const userLogout = () => {
    setToken("");
    setUser("");
    return localStorage.removeItem("Token");
  };
  const IslogedIn = !!Token;
  const userAuthenticationToken = `Bearer ${Token}`;

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        setUser(data.userData);
        setLoding(false);
      } else {
        setLoding(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getServices = async () => {
    try {
      const services = await fetch("http://localhost:8000/api/data/services", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (services.ok) {
        const servicesData = await services.json();

        setService(servicesData.ServiceData);
      }
    } catch (error) {
      console.log(`Error from Frontend ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        StoreTokenInLS,
        userLogout,
        IslogedIn,
        User,
        Token,
        Services,
        userAuthenticationToken,
        Loding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider ");
  }
  return authContextValue;
};
