import React, { useState } from 'react';
import './CoinFlip.css';

function CoinFlip({ coin, onBack }) {
  const [flipping, setFlipping] = useState(false);

  const handleFlip = () => {
    setFlipping(true);
    setTimeout(() => setFlipping(false), 1000); // Flip-Dauer von 1 Sekunde
  };

  return (
    <div className="coin-flip-screen">
      <button onClick={onBack}>Zurück zur Sammlung</button>
      <div className="coin-container" onClick={handleFlip}>
        <img
          src={`${process.env.PUBLIC_URL}${coin}`} // Pfad zu `PUBLIC_URL` hinzugefügt
          alt="Selected Coin"
          className={`coin ${flipping ? 'flipping' : ''}`}
        />
      </div>
    </div>
  );
}

export default CoinFlip;
