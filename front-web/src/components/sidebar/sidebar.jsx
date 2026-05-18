import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sidebar.css";
import logo from "../../assets/logo/logo.png";
import home from "../../assets/homeImage/homeLogo.png";
import nenomon from "../../assets/nenomonImage/nenomon.png";
import object from "../../assets/objectImage/object.png";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="top">
        {collapsed ? (
          <button className="toggle-btn" onClick={() => setCollapsed(false)}>
            <img src={logo} alt="Logo" className="logo-btn" />
          </button>
        ) : (
          <>
            <img src={logo} alt="Logo" className="logo" />

            <button className="toggle-btn" onClick={() => setCollapsed(true)}>
              <span className="material" />
            </button>
          </>
        )}
      </div>

      <nav className="menu">
        <Link to="/home">
          <img src={home} alt="Home" className="homeLogo" />
          <span>Home</span>
        </Link>

        <Link to="/nenomon">
          <img src={nenomon} alt="Nenomon" className="nenomonLogo" />
          <span>Nenomons</span>
        </Link>

        <Link to="/objetos">
          <img src={object} alt="Objetos" className="objectLogo" />
          <span>Objetos</span>
        </Link>

        <Link to="/team">
          <img src={object} alt="Team" className="objectLogo" />
          <span>Equipo</span>
        </Link>
      </nav>

      <div className="bottom">
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Sidebar;