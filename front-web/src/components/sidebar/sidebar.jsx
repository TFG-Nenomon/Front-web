import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/logo/logo.png";
import home from "../../assets/homeImage/homeLogo.png";
import nenomon from "../../assets/nenomonImage/nenomon.png";
import object from "../../assets/objectImage/object.png";
import pokedex from "../../assets/Pokedex/pokedex.png";
import ayudaIcon from "../../assets/ayudaImage/Ayuda.png";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
      aria-label="Menú lateral de navegación"
    >
      <div className="top">
        {collapsed ? (
          <button
            className="toggle-btn"
            onClick={() => setCollapsed(false)}
            aria-label="Abrir menú"
          >
            <img src={logo} alt="Logo" className="logo-btn" />
          </button>
        ) : (
          <>
            <img src={logo} alt="Logo" className="logo" />

            <button
              className="toggle-btn"
              onClick={() => setCollapsed(true)}
              aria-label="Cerrar menú"
            >
              <span className="material" />
            </button>
          </>
        )}
      </div>

      <nav className="menu" aria-label="Navegación principal">
        <Link to="/home">
          <img src={home} alt="" aria-hidden="true" className="homeLogo" />
          <span>Home</span>
        </Link>

        <Link to="/nenomon">
          <img src={pokedex} alt="" aria-hidden="true" className="pokedexLogo" />
          <span>Nenomons</span>
        </Link>

        <Link to="/objetos">
          <img src={object} alt="" aria-hidden="true" className="objectLogo" />
          <span>Objetos</span>
        </Link>

        <Link to="/team">
          <img src={nenomon} alt="" aria-hidden="true" className="nenomonLogo" />
          <span>Equipo</span>
        </Link>

        <Link to="/ayuda">
          <img src={ayudaIcon} alt="" aria-hidden="true" className="ayudaLogo" />
          <span>Ayuda</span>
        </Link>
      </nav>

      <div className="bottom">
        <button
          className="logout-btn"
          onClick={handleLogout}
          aria-label="Cerrar sesión"
        >
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;