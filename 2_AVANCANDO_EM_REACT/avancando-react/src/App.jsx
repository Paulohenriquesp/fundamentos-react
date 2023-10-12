import { useState } from "react";
import "./App.css";

import Maca from "./assets/maca.jpg";
import ConditionalRender from "./componentes/ConditionalRender";
import ListRender from "./componentes/ListRender";
import { ManageData } from "./componentes/ManageData";
import ShowUserName from "./componentes/showUserName";
import CarDetails from "./componentes/CarDetails";
import Fragment from "./componentes/fragment";
import Container from "./componentes/Container";
import ExecuteFunction from "./componentes/ExecuteFunction";
import Message from "./componentes/Message";
import ChangeMessageState from "./componentes/ChangeMessageState";
import UserDetails from "./componentes/UserDetails";

function App() {
  const [userName] = useState("Eduardo Paes Silva Moraes");
  const cars = [
    {
      id: 1,
      brand: "Ferrari",
      color: "Vermelha",
      newCar: true,
      km: 0,
    },
    {
      id: 2,
      brand: "Lambo",
      color: "Vermelha",
      newCar: true,
      km: 3513,
    },
    {
      id: 3,
      brand: "Uno com escada",
      color: "Branco",
      newCar: false,
      km: 100000,
    },
  ];

  const pessoas = [
    { id: 1, nome: 'Paulo', idade: 32, cidade: "São Paulo" },
    { id: 2, nome: 'Gustavo', idade: 30, cidade: "Santa Catarina" },
    { id: 3, nome: 'Caio', idade: 17, cidade: "Parana" },
    { id: 4, nome: 'Junior', idade: 43, cidade: "São Paulo" },
    { id: 5, nome: 'Marcelo', idade: 16, cidade: "São Paulo" },
    { id: 6, nome: 'Flavia', idade: 18, cidade: "São Paulo" },
    { id: 7, nome: 'Amanda', idade: 19, cidade: "São Paulo" } 
]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="app">
      <div>AVANÇANDO EM REACT</div>
      {/* Imagem em Public */}
      <div>
        <img className="img" src="/dados.jpg" alt="dados" />
      </div>
      <div>
        {/* Imagem em Assets */}
        <img src={Maca} alt="Maçã" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="VW" km={10000} color="Blue" newCar={false} />
      {/*Reaproveitamento*/}
      <CarDetails brand="Fiat" km={3000} color="White" newCar={true} />
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        // eslint-disable-next-line react/jsx-key
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="teste" />
      <Container myValue="testing">
        <p>Este é o contéudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {pessoas.map((pessoas) =>(
        // eslint-disable-next-line react/jsx-key
        <UserDetails 
        key={pessoas.id}
        nome={pessoas.nome}
        idade={pessoas.idade}
        cidade={pessoas.cidade}
        /> 
      ))}
    </div>
  );
}

export default App;
