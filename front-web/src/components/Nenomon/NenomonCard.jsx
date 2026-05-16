function NenomonCard({ nenomon }) {
  if (!nenomon) {
    return <p>No hay Nenomon seleccionado</p>;
  }

  return (
    <div className="nenomon-card">
      <img
        src={nenomon.image}
        alt={nenomon.name}
        className="nenomon-image"
      />
      <h2>{nenomon.name}</h2>
    </div>
  );
}

export default NenomonCard;