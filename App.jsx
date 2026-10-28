import { useState, useEffect } from 'react';
import { loadWeather, friendly } from './api.js';
import SearchBar from './components/SearchBar.jsx';
import LoadingMessage from './components/LoadingMessage.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import WeatherCard from './components/WeatherCard.jsx';

export default function App() {
  // all the state lives here (in App) and goes down 1 level as props
  const [city, setCity] = useState('');          // the city the user searched
  const [weather, setWeather] = useState(null);  // the data from the API
  const [status, setStatus] = useState('idle');  // idle / loading / success / error
  const [error, setError] = useState('');        // the message shown when it fails

  // runs again every time city changes (that's what [city] at the end means)
  useEffect(() => {
    if (city === '') return; // nothing searched yet --> nothing to fetch

    // useEffect can't be async itself, so i make an async function inside and call it
    async function load() {
      setStatus('loading');
      try {
        const data = await loadWeather(city);
        setWeather(data);
        setStatus('success');
      } catch (err) {
        setError(friendly(err));
        setStatus('error');
      }
    }
    load();
  }, [city]);

  // SearchBar gives the city back to App through onSearch
  // only one of the 3 states shows at a time, depending on status
  return (
    <div className="card">
      <header>
        <h1>Weather Dashboard App</h1>
      </header>

      <main>
        <SearchBar onSearch={setCity} disabled={status === 'loading'} />

        {status === 'loading' && <LoadingMessage city={city} />}
        {status === 'error' && <ErrorMessage message={error} />}
        {status === 'success' && <WeatherCard weather={weather} />}
      </main>
    </div>
  );
}