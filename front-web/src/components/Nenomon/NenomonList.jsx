function NenomonList({ nenomons, onSelect }) {
  return (
    <div className="nenomon-list">
      {nenomons.map((nenomon) => (
        <div
          key={nenomon.id}
          className="nenomon-item"
          onClick={() => onSelect(nenomon)}
        >
          <img src={nenomon.image} alt={nenomon.name} />
          <span>{nenomon.name}</span>
        </div>
      ))}
    </div>
  );
}

export default NenomonList;