import { useNavigate } from "react-router-dom";
import "./home.css";
import Sidebar from "../sidebar/sidebar";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="home-container">
      <Sidebar />
      <h1>Home</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export default Home;