# Weather Dashboard (React)

My Weather Dashboard (ssignment 4), rebuilt with React and Vite.
You type a city and it shows the weather right now: the city name, an icon,
a short description, the temperature, what it feels like, the humidity and the wind.

## How to install and run it

You need Node.js installed.

1. Open a terminal in the project folder
2. Install the dependencies (this creates the `node_modules` folder):

   ```
   npm install
   ```

3. Start the dev server:

   ```
   npm run dev
   ```

4. Open the link it shows (usually http://localhost:5173/)

(Double-clicking `index.html` doesn't work with Vite, it has to run through `npm run dev`)

## About the API key

The weather data comes from WeatherAPI (https://www.weatherapi.com).
It needs a free API key.

**In the zip:** my key is already inside `src/api.js`, so it works directly.

**On GitHub:** the code only has the placeholder `PASTE_YOUR_KEY_HERE` (no
real key is uploaded). To use it with your own key:

1. Make a free account on https://www.weatherapi.com
2. Your key is on your account page (https://www.weatherapi.com/my/)
3. Open `src/api.js` and replace `PASTE_YOUR_KEY_HERE` with your key
4. Run `npm run dev` and search for a city

## Components

Each component is in its own file in `src/components/`:

- `SearchBar` - the input and the Search button
- `LoadingMessage` - shown while the request is running
- `ErrorMessage` - shown when the city isn't found or the request fails
- `WeatherCard` - shows the weather once it arrived

`App.jsx` holds them together, and `api.js` does the fetching.

## How the state works

- `App` keeps the state that more than one component needs: the searched `city`,
  the `weather` data, the `status` (idle / loading / success / error) and the `error` message.
- `SearchBar` keeps only its own input text, and sends the city up to `App` with the `onSearch` prop.
- A `useEffect` in `App` fetches the weather every time `city` changes.
- `App` passes the data down to its children as props. It only goes down one level,
  so there is no prop drilling.

## Files

```
weather-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── api.js
    ├── index.css
    └── components/
        ├── SearchBar.jsx
        ├── LoadingMessage.jsx
        ├── ErrorMessage.jsx
        └── WeatherCard.jsx
```