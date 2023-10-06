import React, { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name] = useState("Joao");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}

      {name === "Joao" ? (
        <div>Meu nome é Joao =D</div>
      ) : (
        <div>Meu nome não é Joao</div>
      )}
    </div>
  );
};

export default ConditionalRender;
