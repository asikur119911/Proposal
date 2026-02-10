import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonMoved, setNoButtonMoved] = useState(false);
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto' });
  const [noBtnSize, setNoBtnSize] = useState(1);
  const [yesBtnSize, setYesBtnSize] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const music1 = useRef(new Audio('/music1.mp3'));
  const music2 = useRef(new Audio('/music1.mp3'));
  const cardRef = useRef(null);

  useEffect(() => {
    // Preload music
    music1.current.load();
    music2.current.load();
  }, []);

  const handleYes = () => {
    music1.current.pause();
    music2.current.play().catch(() => {});
    setIsAccepted(true);
  };

  const moveNo = () => {
    // Start music 1 if it's not playing yet
    music1.current.play().catch(() => {}); 
    
    // Mark that button has been moved (triggers position: fixed)
    setNoButtonMoved(true);
    
    // Increase click count and make Yes button bigger, No button smaller
    setClickCount(prev => prev + 1);
    setYesBtnSize(prev => Math.min(prev + 0.2, 2.5));
    setNoBtnSize(prev => Math.max(prev - 0.1, 0.5));
    
    // Get the white card boundaries
    if (cardRef.current) {
      const card = cardRef.current.getBoundingClientRect();
      
      // Button dimensions (approximate)
      const btnWidth = 120 * noBtnSize;
      const btnHeight = 60 * noBtnSize;
      
      // Calculate safe area within the card (with padding from edges)
      const padding = 20;
      const minX = card.left + padding;
      const maxX = card.right - btnWidth - padding;
      const minY = card.top + padding;
      const maxY = card.bottom - btnHeight - padding;
      
      // Generate random position within card boundaries
      const x = Math.random() * (maxX - minX) + minX;
      const y = Math.random() * (maxY - minY) + minY;
      
      setNoPos({ top: `${y}px`, left: `${x}px` });
    }
  };

  if (isAccepted) {
    return (
      <div className="container success">
        <div className="success-content">
          <div className="heart-animation">
            <span className="heart">💕</span>
            <span className="heart">💖</span>
            <span className="heart">💗</span>
          </div>
          <h1 className="romantic-text success-title">Yay! I knew you'd say yes!</h1>
          <div className="image-grid">
            <div className="img-wrapper">
              <img src="/photo2.jpg" alt="Us together 1" className="success-img" />
              <div className="img-overlay"></div>
            </div>
            <div className="img-wrapper">
              <img src="/photo3.jpg" alt="Us together 2" className="success-img" />
              <div className="img-overlay"></div>
            </div>
          </div>
          <p className="sub-text">I love you so much! ❤️</p>
          <p className="date-text">This Valentine's Day 2026</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="floating-hearts">
        <span className="float-heart">❤️</span>
        <span className="float-heart">💕</span>
        <span className="float-heart">💖</span>
        <span className="float-heart">💗</span>
        <span className="float-heart">💝</span>
      </div>
      
      <div className="card" ref={cardRef}>
        <div className="img-container">
          <img src="/photo1.jpg" alt="Will you be my Valentine?" className="main-img" />
          <div className="img-glow"></div>
        </div>
        
        <h1 className="romantic-text main-title">
          Will you be my Valentine?
        </h1>
        
        {clickCount > 0 && (
          <p className="hint-text">
            {clickCount < 3 ? "Please? 🥺" : clickCount < 5 ? "Pretty please? 💕" : "I really love you! 💖"}
          </p>
        )}
        
        <div className="btn-group">
          <button 
            className="proposal-btn" 
            onClick={handleYes}
            style={{ 
              transform: `scale(${yesBtnSize})`,
              transition: 'transform 0.3s ease'
            }}
          >
            Yes! 💕
          </button>
          
          <button 
            className="proposal-btn"
            onMouseEnter={moveNo}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNo();
            }}
            style={noButtonMoved ? { 
              position: 'fixed', 
              top: noPos.top, 
              left: noPos.left,
              transform: `scale(${noBtnSize})`,
              transition: 'all 0.15s ease',
              zIndex: 999
            } : {
              transform: `scale(${noBtnSize})`,
              transition: 'transform 0.3s ease'
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
