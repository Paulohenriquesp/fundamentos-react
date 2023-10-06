import "./App.css";

import Maca from "./assets/maca.jpg";
import ConditionalRender from "./componentes/ConditionalRender";
import ListRender from "./componentes/ListRender";
import { ManageData } from "./componentes/ManageData";

function App() {
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
    </div>
  );
}

export default App;
