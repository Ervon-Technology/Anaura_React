import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './TextScroller.css';

const TextScroller = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    { language: 'Urdu', content: 'اردو کا متن' },
    { language: 'English', content: 'English Text' },
    { language: 'Sanskrit', content: 'संस्कृत पाठ्यक्रम' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 6000); // Change text every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container text-center my-5">
      <div className="text-scroller">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`text-item ${currentTextIndex === index ? 'active' : ''}`}
          >
            <h1>{text.content}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextScroller;
