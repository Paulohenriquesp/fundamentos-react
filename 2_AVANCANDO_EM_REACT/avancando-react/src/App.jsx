import { useState } from "react";
import "./App.css";

import Maca from "./assets/maca.jpg";
import ConditionalRender from "./componentes/ConditionalRender";
import ListRender from "./componentes/ListRender";
import { ManageData } from "./componentes/ManageData";
import ShowUserName from "./componentes/showUserName";
import CarDetails from "./componentes/CarDetails";


function App() {
  const [userName] = useState("Eduardo Paes Silva Moraes")
  
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
        <CarDetails brand="Fiat" km={3000} color="White" newCar={true}/>
    </div>
  );
}

export default App;
