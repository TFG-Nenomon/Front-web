import { useEffect, useState } from "react";
import "./Team.css";
import Sidebar from "../sidebar/Sidebar";
import NenomonCard from "../Nenomon/NenomonCard";
import { nenomons } from "../Nenomon/NenomonData";

function Team() {

  const [team, setTeam] = useState([]);

  useEffect(() => {

    const fetchTeam = async () => {

      try {

        const user = JSON.parse(localStorage.getItem("user"));

        const response = await fetch(
          `http://localhost:8080/usuarioNenomon/team/${user.email}`
        );

        const data = await response.json();

        const teamNenomons = data.map((id) =>
          nenomons.find((n) => n.id === id)
        );

        while (teamNenomons.length < 6) {
          teamNenomons.push(null);
        }

        setTeam(teamNenomons);

      } catch (error) {
        console.error("Error cargando team", error);

        const emptyTeam = Array(6).fill(null);
        setTeam(emptyTeam);
      }
    };

    fetchTeam();

  }, []);

  return (
    <div className="team-page">
        <Sidebar/>
      <h1 className="team-title">Tu Equipo</h1>

      <div className="team-grid">

        {team.map((nenomon, index) => (

          <div key={index} className="team-slot">

            {nenomon ? (
              <NenomonCard nenomon={nenomon} />
            ) : (
              <div className="empty-slot">
                <h3>Slot Vacío</h3>
                <p>Consigue mas Nenomons</p>
              </div>
            )}

          </div>

        ))}

      </div>
    </div>
  );
}

export default Team;
