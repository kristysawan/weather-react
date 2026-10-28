// everything that talks to the weather API is in this file (no DOM, no React here)

const WX = 'https://api.weatherapi.com/v1/current.json'; // city name --> current weather
   const API_KEY = 'PASTE_YOUR_API_KEY_HERE'; // my key goes here (i put the placeholder back before pushing to github)

// same as what i did in assignment 4: fetch only fails by itself when there's no answer at all (offline)
// a 400 or 500 is still an answer, so i check response.ok and throw my own error
async function getJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

export async function loadWeather(city) {
  // URLSearchParams builds the "?key=...&q=..." part for me
  const params = new URLSearchParams({ key: API_KEY, q: city });
  return getJSON(`${WX}?${params}`);
}

// technical error --> a message a normal person (me) understands
export function friendly(err) {
  // weatherapi sends a 400 when it cant find the city
  if (err.message === 'HTTP 400') {
    return 'City not found. Check the spelling and try again.';
  }
  // no internet, wrong key, server problem...
  return "Couldn't get the weather. Check your connection or try again in a minute.";
}
