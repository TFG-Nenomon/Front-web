function ManualTecnico() {
  return (
    <div className="ayuda-section">
      <h2 className="section-title">Manual de Instalación y Administración</h2>
      <p className="section-text">
        Documentación técnica para el despliegue local, configuración del entorno y administración de la aplicación Front-End (Vite + React).
      </p>

      <div className="card-grid">
        <div className="doc-card">
          <h3>⚙️ Requisitos Previos</h3>
          <ul className="styled-list">
            <li><strong>Node.js:</strong> Versión 18.x o superior.</li>
            <li><strong>Gestor de paquetes:</strong> npm o yarn.</li>
            <li><strong>Git:</strong> Para control de versiones.</li>
          </ul>
        </div>

        <div className="doc-card">
          <h3>📦 Instalación Local</h3>
          <p>Sigue estos pasos para levantar el proyecto en tu máquina de desarrollo:</p>
          <pre>
<code># 1. Clonar el repositorio
git clone [url-del-repo]

# 2. Navegar al directorio
cd TFG_Web/Front/Front-web/front-web

# 3. Instalar dependencias
npm install</code>
          </pre>
        </div>

        <div className="doc-card">
          <h3>🚀 Ejecución y Configuración</h3>
          <p>Para iniciar el servidor de desarrollo con Vite (Hot Module Replacement activado):</p>
          <pre>
<code>npm run dev</code>
          </pre>
          <p>La aplicación estará disponible por defecto en <code>http://localhost:5173</code>.</p>
        </div>
      </div>

      <h3 className="section-title" style={{marginTop: '3rem', fontSize: '1.5rem'}}>Administración del Entorno</h3>
      <p className="section-text">
        Las variables de entorno deben configurarse en un archivo <code>.env</code> en la raíz del proyecto para definir la URL base de la API (Back-End) que provee los datos de los Nenomons, Objetos y el Equipo del usuario.
        <br/><br/>
        <em>Ejemplo de variables necesarias:</em><br/>
        <code>VITE_API_BASE_URL=http://tu-backend-api.com/api</code>
      </p>
    </div>
  );
}

export default ManualTecnico;
