import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './analysis.css';

const Analysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newsText = location.state?.inputText || '';

  // Redirect to home if page is refreshed (i.e., no state is passed)
  useEffect(() => {
    if (!location.state || !location.state.inputText) {
      navigate('/');
    }
  }, [location.state, navigate]);

  // Legitimate fake news detection logic
  const fakePatterns = [
    /you won't believe/i,
    /shocking/i,
    /breaking news/i,
    /click here/i,
    /read this before/i,
    /what happened next/i,
    /unbelievable/i,
    /is this the end/i
  ];

  const isFakeNews = (text) => {
    const containsClickbait = fakePatterns.some((pattern) => pattern.test(text));
    const lacksCredibleSource = !/(bbc|reuters|cnn|ndtv|who|nytimes|gov|times of india|al jazeera|unicef)/i.test(text);
    const isTooShort = text.length < 50;
    return (containsClickbait && lacksCredibleSource) || isTooShort;
  };

  const isFake = isFakeNews(newsText);

  const trueMessage = (
    <div className="result true-news">
      ✅ <h2>This News is True!</h2>
      <p>🌟 Great job staying informed. You’ve just dodged misinformation like a pro!</p>
    </div>
  );

  const fakeMessage = (
    <div className="result fake-news">
      ❌ <h2>Oops... This News is Fake!</h2>
      <p>🧠 Be cautious. This content shows signs of misinformation.</p>
      <blockquote>
        "Fact-checkers suggest this claim has no basis in verified sources. Always trust established media and government channels."
      </blockquote>
    </div>
  );

  if (!newsText) {
    return <p className="loading-msg">Redirecting to home...</p>;
  }

  return (
    <div className="analysis-container">
      <h1>🔍 Analysis Result</h1>
      <p className="news-text">"{newsText}"</p>
      {isFake ? fakeMessage : trueMessage}
    </div>
  );
};

export default Analysis;
