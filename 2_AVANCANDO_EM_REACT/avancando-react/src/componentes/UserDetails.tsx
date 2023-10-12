import React from "react";

const UserDetails = ({ nome, idade, cidade }) => {
  function checarIdade() {}
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Da cidade: {cidade}</p>
      {idade >= 18 ? (
        <p>Essa pessoa está dentro da idade para tirar carteira de motorista</p>
      ) : (
        <p>
          Infelizmente essa pessoa ainda não tem idade para tirar a carteira
        </p>
      )}
    </div>
  );
};

export default UserDetails;
