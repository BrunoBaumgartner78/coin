import React, { useState } from 'react';
import CoinCollection from './components/CoinCollection';
import CoinFlip from './components/CoinFlip';
import './App.css';

function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);

  const handleCoinSelect = (coin) => {
    setSelectedCoin(coin);
  };

  const handleBack = () => {
    setSelectedCoin(null);
  };

  return (
    <div className="App">
      {selectedCoin ? (
        <CoinFlip coin={selectedCoin} onBack={handleBack} />
      ) : (
        <CoinCollection onSelect={handleCoinSelect} />
      )}
    </div>
  );
}

export default App;
