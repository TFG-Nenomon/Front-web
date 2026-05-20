function ManualUsuario() {
  return (
    <div className="ayuda-section">
      <h2 className="section-title">Manual de Usuario y Guía de Referencia</h2>
      <p className="section-text">
        Bienvenido a la guía oficial de Nenomon Web. Aquí aprenderás a utilizar todas las funciones principales de la aplicación para gestionar tus criaturas y objetos.
      </p>

      <div className="card-grid">
        <div className="doc-card">
          <h3>🎮 1. Explorador de Nenomons</h3>
          <p>
            La pantalla <strong>Nenomons</strong> muestra la Pokédex completa de nuestro universo.
          </p>
          <ul className="styled-list">
            <li>Visualiza todos los Nenomons disponibles con sus estadísticas base.</li>
            <li><strong>Filtrado por Nombre:</strong> Utiliza la barra de búsqueda superior para encontrar una criatura específica rápidamente.</li>
            <li><strong>Filtrado por Tipo:</strong> Usa los selectores para agrupar Nenomons según su tipo elemental.</li>
          </ul>
        </div>

        <div className="doc-card">
          <h3>🎒 2. Gestión de Objetos</h3>
          <p>
            En la pestaña <strong>Objetos</strong> tienes acceso a todo el inventario de ítems del juego.
          </p>
          <ul className="styled-list">
            <li>Consulta el precio de compra y venta de cada objeto.</li>
            <li>Lee las descripciones para entender qué efectos tienen en combate o en la aventura.</li>
            <li>Organiza visualmente tu estrategia antes de volver al juego.</li>
          </ul>
        </div>

        <div className="doc-card">
          <h3>🏆 3. Tu Equipo (Team)</h3>
          <p>
            La pestaña <strong>Team</strong> es tu centro de mando personal.
          </p>
          <ul className="styled-list">
            <li>Muestra el equipo de Nenomons que has capturado y seleccionado en el juego aparte.</li>
            <li>Los datos se sincronizan en <strong>tiempo real mediante una API</strong> conectada directamente a nuestra base de datos central.</li>
            <li>Revisa los niveles, ataques y estado actual de tu equipo desde cualquier dispositivo.</li>
          </ul>
        </div>
      </div>

      <h3 className="section-title" style={{marginTop: '3rem', fontSize: '1.5rem'}}>Ayuda Sensible al Contexto</h3>
      <p className="section-text">
        ¿Te has perdido? Durante la navegación por la aplicación, la información que se muestra en pantalla está diseñada para ser intuitiva, proveyendo un entorno de asistencia completo.
      </p>
    </div>
  );
}

export default ManualUsuario;
