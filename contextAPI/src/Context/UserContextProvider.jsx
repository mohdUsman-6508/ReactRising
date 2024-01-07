// context provider bana rahe hai

import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const admin = "osman";

  return (
    <UserContext.Provider value={{ user, setUser, admin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
