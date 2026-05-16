import Sidebar from "../sidebar/Sidebar";
import "./objetos.css";

import { objetos } from "./ObjetosData";

function Objetos() {
  return (
    <div className="objetos-container">

      <Sidebar />

      <div className="objetos-grid">

        {objetos.map((objeto) => (

          <div className="objeto-card" key={objeto.id}>

            <img
              src={objeto.image}
              alt={objeto.name}
              className="objeto-image"
            />

            <h3 className="objeto-name">
              {objeto.name}
            </h3>

            <div className="objeto-tooltip">
              {objeto.description}
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Objetos;
