import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ top: '60%', left: '55%' });
  const music1 = useRef(new Audio('/music1.mp3'));
  const music2 = useRef(new Audio('/music2.mp3'));

  const handleYes = () => {
    music1.current.pause();
    music2.current.play();
    setIsAccepted(true);
  };

  const moveNo = () => {
      // Start music 1 if it's not playing yet
      music1.current.play().catch(() => {}); 
      
      const padding = 100; // Keeps the button away from the very edge
      const safeWidth = window.innerWidth - padding;
      const safeHeight = window.innerHeight - padding;

      // Calculate random position within the "safe" area
      const x = Math.random() * safeWidth;
      const y = Math.random() * safeHeight;
      
      setNoPos({ top: `${y}px`, left: `${x}px` });
    };

  if (isAccepted) {
    return (
      <div className="container success">
        <h1 className="romantic-text">Yay! I knew you'd say yes! ❤️</h1>
        <div className="grid">
          <img src="/photo2.jpg" alt="Success 1" className="success-img" />
          <img src="/photo3.jpg" alt="Success 2" className="success-img" />
        </div>
        <p className="sub-text">I love you so much!</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <img src="/photo1.jpg" alt="Proposal" className="main-img" />
        <h1 className="romantic-text">Will you be my Valentine?</h1>
        <div className="btn-group">
          <button className="proposal-btn yes-btn" onClick={handleYes}>
            Yes
          </button>
          
          <button 
            className="proposal-btn no-btn"
            onMouseEnter={moveNo} // This makes it jump!
            style={{ 
              position: 'fixed', 
              top: noPos.top, 
              left: noPos.left,
              transition: 'all 0.1s ease' 
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;