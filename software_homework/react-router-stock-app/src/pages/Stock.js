import React from 'react';
import stocks from '../stocks';
import { useParams } from 'react-router-dom';

export default function Stock (props) {
  const { symbol } = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);
  

  if (!stock) {
    return <div>Stock not found</div>;
  }

  return (
    <div className="stock-detail">
      <h2>{stock.name}</h2>
      <p>Symbol: {stock.symbol}</p>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
}