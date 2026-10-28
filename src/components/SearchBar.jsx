import { useState } from 'react';

// the text in the input only matters to this component, so its state stays here
export default function SearchBar({ onSearch, disabled }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading (button click and Enter both submit)
    if (!text.trim()) return; // empty --> no point asking the API
    onSearch(text.trim()); // send the city up to App
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city name"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button disabled={disabled}>Search</button>
    </form>
  );
}
