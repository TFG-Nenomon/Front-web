import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "./objetos.css";

import { objetos } from "./ObjetosData";

function Objetos() {
  const [focusedId, setFocusedId] = useState(null);

  return (
    <div className="objetos-container">

      <Sidebar />

      <div className="objetos-grid">

        {objetos.map((objeto) => (

          <div
            className="objeto-card"
            key={objeto.id}
            tabIndex={0}
            onFocus={() => setFocusedId(objeto.id)}
            onBlur={() => setFocusedId(null)}
          >

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
