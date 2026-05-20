import { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: "¿Qué es Nenomon y cómo funciona la conexión con el juego?",
      answer: "Nenomon es una plataforma web que te permite visualizar la base de datos completa de criaturas (Nenomons), objetos y gestionar tu equipo. La web se conecta mediante una API a la base de datos de tu juego principal para sincronizar en tiempo real el equipo que has formado."
    },
    {
      question: "¿Cómo puedo filtrar los Nenomons?",
      answer: "En la pestaña 'Nenomons', puedes utilizar la barra de búsqueda para encontrar un Nenomon por su nombre o usar el filtro desplegable para ver solo aquellos de un tipo específico (Fuego, Agua, Planta, etc.)."
    },
    {
      question: "¿Por qué no aparece mi equipo en la pestaña Team?",
      answer: "Asegúrate de que el juego externo haya sincronizado tus datos más recientes a través de la API. Si el problema persiste, verifica que estés conectado con la cuenta correcta."
    },
    {
      question: "¿Qué tipo de objetos puedo encontrar en la sección Objetos?",
      answer: "Encontrarás todos los objetos consumibles, clave y equipables disponibles en el juego, junto con sus estadísticas y efectos en tus Nenomons."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="ayuda-section">
      <h2 className="section-title">Preguntas Frecuentes (FAQ)</h2>
      <p className="section-text">
        Encuentra respuestas rápidas a las dudas más comunes sobre la plataforma Nenomon.
      </p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
