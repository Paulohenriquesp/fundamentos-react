import { useState } from "react";

export const ManageData = () => {
  let someData = 10;
  

  const [number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
        <p>Valor: {number} </p>
        <button onClick={() => setNumber(25)}>Mudar valor</button>
    </div>
  );
};

export default ManageData;
