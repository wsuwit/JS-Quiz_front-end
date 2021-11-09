import { createContext, useEffect, useState } from "react";
import { user as initialUser } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState(null);
  console.log("@user:", user);

  return (
    <AuthContext.Provider
      value={{ user, setUser, toggle, setToggle, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
