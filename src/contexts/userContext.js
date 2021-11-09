import axios from "../config/axios";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userById, setUserById] = useState({});
  const [toggleUser, setToggleUser] = useState(false);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const data = await axios.get("/user/myId");
  //       // console.log(`@data:`, data.data.result);
  //       setUserById(data.data.result);
  //     } catch (error) {}
  //   };
  //   fetchUser();
  // }, [toggleUser]);

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
