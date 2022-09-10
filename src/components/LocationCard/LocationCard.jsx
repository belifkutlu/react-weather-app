import "./LocationCard.css";

const LocationCard = ({ weather, selectedCity }) => {
  return (
    <div className="location-card">
      <h2>{selectedCity.name}</h2>
      <div>
        <img src={weather.current.condition.icon} alt="" />
      </div>
      <p>{weather.current.condition.text}:</p>
      <p>{weather.current.temp_c}ºC</p>
    </div>
  );
};

export default LocationCard;
