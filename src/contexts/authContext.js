import { createContext, useState } from "react";
import { user as initialUser } from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [userCurIndex, setUserCurIndex] = useState(0);

  // console.log("@user:", user);

  return (
    <AuthContext.Provider
      value={{ user, setUser, userCurIndex, setUserCurIndex }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
