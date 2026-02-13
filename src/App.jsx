import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonMoved, setNoButtonMoved] = useState(false);
  const [noPos, setNoPos] = useState({ top: 'auto', left: 'auto' });
  const [clickCount, setClickCount] = useState(0);
  const music1 = useRef(new Audio('/music1.mp3'));
  const music2 = useRef(new Audio('/m2.mp3'));
  const cardRef = useRef(null);

  useEffect(() => {
    // Preload music
    music1.current.load();
    music2.current.load();
    
    // Allow audio to loop if needed
    music2.current.loop = true;
  }, []);

  const handleYes = () => {
    music1.current.pause();
    music2.current.play().catch(() => {});
    setIsAccepted(true);
  };

  const moveNo = () => {
    // Start music 1 if it's not playing yet (optional interaction)
    music1.current.play().catch(() => {}); 
    
    // Mark that button has been moved (triggers position: fixed)
    setNoButtonMoved(true);
    
    setClickCount(prev => prev + 1);
    
    // Get viewport boundaries
    const btnWidth = 100; // Approximate width
    const btnHeight = 50; // Approximate height
    
    // Calculate safe area within the viewport
    const padding = 20;
    const minX = padding;
    const maxX = window.innerWidth - btnWidth - padding;
    const minY = padding;
    const maxY = window.innerHeight - btnHeight - padding;
    
    // Generate random position within viewport boundaries
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    
    // Ensure it doesn't overlap completely with the center (optional refinement)
    // For now, simple random is fine as requested
    
    setNoPos({ top: `${y}px`, left: `${x}px` });
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
            </div>
            <h1 className="success-title">She said Yes!</h1>
            <p className="success-subtitle">My heart is yours, forever.</p>
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
                <h3 className="memory-title">Beautiful Beginnings</h3>
                <p className="memory-description">
                  Looking back at this moment, I realize how lucky I am. 
                  You walked into my life and suddenly everything made sense.
                </p>
              </div>
            </div>

            <div className="heart-divider"><span className="divider-heart">❤️</span></div>

            {/* Memory 2 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo2.jpg" alt="Our adventure" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Adventures With You</h3>
                <p className="memory-description">
                  Every trip, every walk, every little journey with you becomes a 
                  core memory. You make the world brighter just by being in it.
                </p>
              </div>
            </div>

            <div className="heart-divider"><span className="divider-heart">💕</span></div>

            {/* Memory 3 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo3.jpg" alt="Special times" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Your Smile</h3>
                <p className="memory-description">
                  I could spend forever just trying to make you smile. 
                  It's the most beautiful sight in the world to me.
                </p>
              </div>
            </div>

            <div className="heart-divider"><span className="divider-heart">💖</span></div>

            {/* Memory 4 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo4.jpg" alt="Together forever" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">My Comfort</h3>
                <p className="memory-description">
                  On bad days, you're my safe haven. On good days, you're my celebration. 
                  You are my everything, my love.
                </p>
              </div>
            </div>

            <div className="heart-divider"><span className="divider-heart">💗</span></div>

            {/* Memory 5 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo5.jpg" alt="Our journey" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Growing Together</h3>
                <p className="memory-description">
                  I love who we are when we're together. Building a future with you 
                  is my biggest dream coming true.
                </p>
              </div>
            </div>

            <div className="heart-divider"><span className="divider-heart">💝</span></div>

            {/* Memory 6 */}
            <div className="memory-card">
              <div className="memory-image-wrapper">
                <img src="/photo6.jpg" alt="Forever love" className="memory-img" />
                <div className="image-shine"></div>
              </div>
              <div className="memory-text">
                <h3 className="memory-title">Forever & Always</h3>
                <p className="memory-description">
                  So here's to us. To laughter, to love, and to a lifetime of 
                  happiness. I love you more than words can say.
                </p>
              </div>
            </div>

            {/* Final Message */}
            <div className="final-message">
              <div className="love-quote">
                <p className="quote-text">"You are my heart, my life, my one and only thought."</p>
              </div>
              <div className="signature">
                <p className="signature-text">Love You Forever</p>
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
            {clickCount < 3 ? "Think again? 🥺" : clickCount < 5 ? "Don't break my heart! 💔" : "Please say yes! 💕"}
          </p>
        )}
        
        <div className="btn-group">
          <button 
            className="proposal-btn yes-btn" 
            onClick={handleYes}
          >
            Yes
          </button>
          
          <button 
            className="proposal-btn no-btn"
            onMouseEnter={moveNo}
            onTouchStart={(e) => {
              // Only move if it hasn't moved yet or randomly
              moveNo();
            }}
            style={noButtonMoved ? { 
              position: 'fixed', 
              top: noPos.top, 
              left: noPos.left,
              transition: 'all 0.2s ease',
              zIndex: 9999
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
