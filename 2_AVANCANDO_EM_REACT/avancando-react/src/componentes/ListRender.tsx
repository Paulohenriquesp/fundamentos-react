import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Joao", "Pedro", "Augusto", "Mario"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Pedro", age: 17 },
    { id: 3, name: "Ramon", age: 21 },
    { id: 4, name: "Mah", age: 55 },
    { id: 5, name: "Flavio", age: 42 },
    { id: 6, name: "Julio", age: 32 },
    { id: 7, name: "Fabio", age: 19 },
  ]);

  const deleteRandom = () => {
    const randomNumer = Math.floor(Math.random() * 8);

    setUsers((prevUsers) => {
      return prevUsers.filter((users) => randomNumer !== users.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
