// StockTradingGame.js
import React, { useState, useEffect } from 'react';

const StockTradingGame = () => {
  const [balance, setBalance] = useState(10000);
  const [stockPrice, setStockPrice] = useState(50);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const priceInterval = setInterval(updateStockPrice, 3000);

    return () => clearInterval(priceInterval);
  }, []);

  const buyStock = () => {
    const totalPrice = quantity * stockPrice;

    if (totalPrice <= balance) {
      setBalance(prevBalance => prevBalance - totalPrice);
      alert(`You bought ${quantity} stocks for $${totalPrice}`);
    } else {
      alert("Insufficient funds!");
    }
  };

  const sellStock = () => {
    const totalPrice = quantity * stockPrice;

    setBalance(prevBalance => prevBalance + totalPrice);
    alert(`You sold ${quantity} stocks for $${totalPrice}`);
  };

  const updateStockPrice = () => {
    // Simulate stock price changes
    const newStockPrice = Math.floor(Math.random() * 100) + 1;
    setStockPrice(newStockPrice);
  };

  return (
    <div>
      <h1>Trading Game</h1>
      <p>Balance: ${balance}</p>
      <p>Stock Price: ${stockPrice}</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
      />
      <button onClick={buyStock}>Buy Stock</button>
      <button onClick={sellStock}>Sell Stock</button>
    </div>
  );
};

export default StockTradingGame;
