import { useState } from "react";
import Sidebar from "../sidebar/sidebar";
import FAQ from "./sections/FAQ";
import ManualUsuario from "./sections/ManualUsuario";
import ManualTecnico from "./sections/ManualTecnico";
import DespliegueHostinger from "./sections/DespliegueHostinger";
import EstrategiaPruebas from "./sections/EstrategiaPruebas";
import "./Ayuda.css";

function Ayuda() {
  const [activeTab, setActiveTab] = useState("faq");

  const renderContent = () => {
    switch (activeTab) {
      case "faq":
        return <FAQ />;
      case "usuario":
        return <ManualUsuario />;
      case "tecnico":
        return <ManualTecnico />;
      case "despliegue":
        return <DespliegueHostinger />;
      case "pruebas":
        return <EstrategiaPruebas />;
      default:
        return <FAQ />;
    }
  };

  return (
    <div className="ayuda-wrapper">
      <Sidebar />
      <div className="ayuda-content-area">
        <div className="ayuda-header">
          <h1>Centro de Documentación y Ayuda</h1>
          <p>
            Encuentra respuestas a tus preguntas, manuales de usuario y la documentación técnica del proyecto.
          </p>
        </div>

        <div className="ayuda-tabs">
          <button 
            className={`ayuda-tab-btn ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            Preguntas Frecuentes
          </button>
          <button 
            className={`ayuda-tab-btn ${activeTab === 'usuario' ? 'active' : ''}`}
            onClick={() => setActiveTab('usuario')}
          >
            Manual de Usuario
          </button>
          <button 
            className={`ayuda-tab-btn ${activeTab === 'tecnico' ? 'active' : ''}`}
            onClick={() => setActiveTab('tecnico')}
          >
            Manual Técnico
          </button>
          <button 
            className={`ayuda-tab-btn ${activeTab === 'despliegue' ? 'active' : ''}`}
            onClick={() => setActiveTab('despliegue')}
          >
            Despliegue (Hostinger)
          </button>
          <button 
            className={`ayuda-tab-btn ${activeTab === 'pruebas' ? 'active' : ''}`}
            onClick={() => setActiveTab('pruebas')}
          >
            Estrategia de Pruebas
          </button>
        </div>

        <div className="ayuda-section-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Ayuda;