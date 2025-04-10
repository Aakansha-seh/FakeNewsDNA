// SearchBox.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search-box.css';

const SearchBox = () => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/analysis', { state: { inputText } });
  };

  return (
    <div className="search-container">
      <h2>🕵️‍♂️ Paste Your News Text</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <textarea
          placeholder="Paste the news text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Detect Now</button>
      </form>
    </div>
  );
};

export default SearchBox;
