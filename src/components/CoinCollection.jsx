import React from 'react';
import ImageSlider from './ImageSlider';
import './CoinCollection.css';

const coinImages = [
  '/images/coin.png',
  '/images/coin1.png',
  '/images/coin2.png',
  '/images/coin3.png',
  '/images/coin4.png',
  '/images/coin5.png',
  '/images/coin6.png',
];

function CoinCollection({ onSelect }) {
  return (
    <div className="coin-collection">
      <h2>Wähle eine Münze</h2>
      <ImageSlider images={coinImages} onSelect={onSelect} />
    </div>
  );
}

export default CoinCollection;
