function EstrategiaPruebas() {
  return (
    <div className="ayuda-section">
      <h2 className="section-title">Documento Explicativo: Estrategia de Pruebas</h2>
      <p className="section-text">
        Este documento define la estrategia adoptada para garantizar que la aplicación compila correctamente, no presenta errores de ejecución y cumple con los requisitos del TFG.
      </p>

      <div className="card-grid">
        <div className="doc-card">
          <h3>🧪 1. Estrategia Seguida</h3>
          <p>
            Se ha optado por una estrategia de <strong>Pruebas Funcionales (Caja Negra)</strong> enfocada en la experiencia del usuario y la robustez del sistema de ruteo en React. El objetivo principal es asegurar la compilación del proyecto sin *warnings* críticos y la ausencia de errores en tiempo de ejecución.
          </p>
        </div>

        <div className="doc-card">
          <h3>🔍 2. Pruebas Realizadas</h3>
          <ul className="styled-list">
            <li><strong>Prueba de Compilación:</strong> Ejecución de <code>vite build</code>. Resultado esperado: Construcción exitosa del bundle en la carpeta <code>dist</code>.</li>
            <li><strong>Pruebas de Navegación:</strong> Verificación manual del ruteo usando `react-router-dom`. Comprobación de que las rutas <code>/home</code>, <code>/nenomon</code>, <code>/objetos</code>, <code>/team</code> y <code>/ayuda</code> cargan sin errores en consola.</li>
            <li><strong>Pruebas de Integración (API):</strong> Verificación de que la pestaña "Team" solicita y renderiza correctamente los datos provenientes de la base de datos externa del juego.</li>
            <li><strong>Pruebas de Filtros:</strong> Validación del buscador por nombre y el filtro por tipos en la vista de Nenomons.</li>
          </ul>
        </div>

        <div className="doc-card">
          <h3>✅ 3. Resultados Obtenidos</h3>
          <p>
            Tras la fase de pruebas intensivas, los resultados arrojan que:
          </p>
          <ul className="styled-list">
            <li>El proyecto <strong>compila al 100%</strong>.</li>
            <li><strong>No se producen errores de ejecución</strong> (Crash) ni bloqueos de la interfaz durante las peticiones a la API.</li>
            <li>Se han añadido exitosamente las secciones de ayuda requeridas para la evaluación.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EstrategiaPruebas;
