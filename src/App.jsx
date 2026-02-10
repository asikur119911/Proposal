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
  const music2 = useRef(new Audio('/music2.mp3'));
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
    
    // Increase click count and make Yes button bigger (No button stays same size)
    setClickCount(prev => prev + 1);
    setYesBtnSize(prev => Math.min(prev + 0.25, 3));
    
    // Get the white card boundaries
    if (cardRef.current) {
      const card = cardRef.current.getBoundingClientRect();
      
      // Button dimensions (approximate, using base size)
      const btnWidth = 120;
      const btnHeight = 60;
      
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
          {/* Hero Section */}
          <div className="success-hero">
            <div className="heart-burst">
              <span className="burst-heart">💕</span>
              <span className="burst-heart">💖</span>
              <span className="burst-heart">💗</span>
              <span className="burst-heart">💝</span>
              <span className="burst-heart">💓</span>
            </div>
            <h1 className="success-title">She said Yes!</h1>
            <p className="success-subtitle">This is where our forever begins...</p>
          </div>

          {/* Scrollable Content */}
          <div className="memory-timeline">
            
            {/* Memory 1 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo1.jpg" alt="Our first moment" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">The Day We Met</h3>
                <p className="memory-description">
                  From the first moment I saw you, I knew you were special. 
                  Your smile lit up my entire world.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="heart-divider">
              <span className="divider-heart">❤️</span>
            </div>

            {/* Memory 2 */}
            <div className="memory-card reverse">
              <div className="memory-image-wrapper">
                <img src="/photo2.jpg" alt="Our adventure" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Every Moment Together</h3>
                <p className="memory-description">
                  Every second with you feels like a beautiful dream. 
                  You make the ordinary feel extraordinary.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="heart-divider">
              <span className="divider-heart">💕</span>
            </div>

            {/* Memory 3 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo3.jpg" alt="Special times" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Your Laughter</h3>
                <p className="memory-description">
                  Your laugh is my favorite sound. It's the music that plays 
                  in my heart, making everything better.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="heart-divider">
              <span className="divider-heart">💖</span>
            </div>

            {/* Memory 4 */}
            <div className="memory-card reverse">
              <div className="memory-image-wrapper">
                <img src="/photo4.jpg" alt="Together forever" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">My Safe Haven</h3>
                <p className="memory-description">
                  In your arms, I found my home. With you, I am complete, 
                  loved, and endlessly happy.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="heart-divider">
              <span className="divider-heart">💗</span>
            </div>

            {/* Memory 5 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo5.jpg" alt="Our journey" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Growing Together</h3>
                <p className="memory-description">
                  Every day with you is a new adventure. I can't wait to see 
                  what beautiful memories we'll create next.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="heart-divider">
              <span className="divider-heart">💝</span>
            </div>

            {/* Memory 6 */}
            <div className="memory-card reverse">
              <div className="memory-image-wrapper">
                <img src="/photo6.jpg" alt="Forever love" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Forever & Always</h3>
                <p className="memory-description">
                  This Valentine's Day marks just the beginning. I promise to 
                  love you, cherish you, and stand by you always.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="final-message">
              <div className="love-quote">
                <p className="quote-text">"In all the world, there is no heart for me like yours."</p>
                <p className="quote-author">— My Heart to Yours</p>
              </div>
              <div className="signature">
                <p className="signature-text">I Love You So Much</p>
                <p className="date-text">Valentine's Day 2026</p>
              </div>
            </div>

          </div>
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
        <span className="float-heart">💓</span>
      </div>
      
      <div className="card" ref={cardRef}>
        <div className="img-container">
          <img src="/photo1.jpg" alt="Will you be my Valentine?" className="main-img" />
          <div className="img-glow"></div>
        </div>
        
        <h1 className="main-title">
          Will you be my Valentine?
        </h1>
        
        {clickCount > 0 && (
          <p className="hint-text">
            {clickCount < 3 ? "Please? 🥺" : clickCount < 5 ? "Pretty please? 💕" : clickCount < 8 ? "I really love you! 💖" : "You're my everything! 🌟"}
          </p>
        )}
        
        <div className="btn-group">
          <button 
            className="proposal-btn yes-btn" 
            onClick={handleYes}
            style={{ 
              transform: `scale(${yesBtnSize})`,
              transition: 'transform 0.3s ease'
            }}
          >
            Yes! 💕
          </button>
          
          <button 
            className="proposal-btn no-btn"
            onMouseEnter={moveNo}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNo();
            }}
            style={noButtonMoved ? { 
              position: 'fixed', 
              top: noPos.top, 
              left: noPos.left,
              transition: 'all 0.15s ease',
              zIndex: 999
            } : {}}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
