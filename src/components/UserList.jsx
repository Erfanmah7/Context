import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

function UserList() {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
