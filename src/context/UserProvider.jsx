import React, { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: "erfan" },
    { id: 2, name: "reza" },
    { id: 3, name: "muhammad" },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
