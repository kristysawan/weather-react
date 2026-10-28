// gets the API data from App and only picks the values it needs
export default function WeatherCard({ weather }) {
  const { location, current } = weather;
  const icon = `https:${current.condition.icon}`; // the icon link starts with // ->so i add https:

  return (
    <section className="weather-card">
      <h2>{location.name}</h2>

      <div className="main-info">
        <img className="icon" src={icon} alt={current.condition.text} />
        <span className="temp">{Math.round(current.temp_c)}°C</span>
      </div>
      <p className="description">{current.condition.text}</p>

      <ul className="details">
        <li>Feels like {Math.round(current.feelslike_c)}°C</li>
        <li>Humidity {current.humidity}%</li>
        <li>Wind {Math.round(current.wind_kph)} km/h</li>
      </ul>
    </section>
  );
}
