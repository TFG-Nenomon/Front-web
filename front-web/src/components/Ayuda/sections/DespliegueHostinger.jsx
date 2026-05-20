function DespliegueHostinger() {
  return (
    <div className="ayuda-section">
      <h2 className="section-title">Estrategia de Distribución y Despliegue</h2>
      <p className="section-text">
        Este documento detalla el proceso a futuro para llevar el proyecto a un entorno de producción mediante el pago de un servidor Hostinger y la sincronización con GitHub.
      </p>

      <div className="card-grid">
        <div className="doc-card">
          <h3>1. Preparación del Repositorio (GitHub)</h3>
          <p>
            El código fuente debe estar alojado en un repositorio remoto de GitHub. Se asegurará que la rama <code>main</code> o <code>master</code> contenga una versión estable y probada del Front-End (React) y del Back-End.
          </p>
          <ul className="styled-list">
            <li>Creación de un archivo <code>.gitignore</code> para excluir carpetas pesadas como <code>node_modules</code>.</li>
            <li>Uso de Git para realizar *commits* semánticos de los cambios.</li>
          </ul>
        </div>

        <div className="doc-card">
          <h3>2. Compilación del Proyecto (Build)</h3>
          <p>
            Antes de subir el Front-End al servidor web, es necesario generar los archivos estáticos optimizados. Esto se realiza ejecutando el siguiente comando:
          </p>
          <pre>
<code>npm run build</code>
          </pre>
          <p>
            Esto creará una carpeta <code>dist/</code> con los archivos HTML, CSS y JS minificados, listos para ser leídos por cualquier servidor web (Apache, Nginx, LiteSpeed).
          </p>
        </div>

        <div className="doc-card">
          <h3>3. Despliegue en Hostinger</h3>
          <p>El plan a futuro consiste en:</p>
          <ul className="styled-list">
            <li><strong>Contratación:</strong> Adquirir un plan de Hosting Web (por ejemplo, Premium Web Hosting) en Hostinger.</li>
            <li><strong>Conexión GitHub-Hostinger:</strong> Utilizar la herramienta de despliegue automático del *hPanel* de Hostinger o configurar *GitHub Actions* para que, con cada cambio en <code>main</code>, se despliegue automáticamente.</li>
            <li><strong>Subida Manual (Alternativa):</strong> Comprimir la carpeta <code>dist/</code> en un `.zip`, subirla mediante el Administrador de Archivos del hPanel a la carpeta <code>public_html</code> y extraer los archivos.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DespliegueHostinger;
