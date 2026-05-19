import { useNavigate } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";

function Ayuda() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
      <Sidebar />
      <h1>Ayuda</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export default Ayuda;