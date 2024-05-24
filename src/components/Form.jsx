import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

function Form() {
  const { users, setUsers } = useContext(UserContext);
  const [name, setName] = useState("");

  const addHandler = () => {
    setUsers((users) => [
      ...users,
      { name: name, id: Math.floor(Math.random() * 100) },
    ]);
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}

export default Form;
