import { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userById, setUserById] = useState({});
  const [toggleUser, setToggleUser] = useState(false);

  return (
    <UserContext.Provider
      value={{
        userById,
        setUserById,
        toggleUser,
        setToggleUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
