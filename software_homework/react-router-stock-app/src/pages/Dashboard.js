import stocks from '../stocks.js';
import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  return (
    <div className="dashboard">
      {stocks.map((stock) => (
        <Link to={`/stock/${stock.symbol}`} key={stock.symbol}>
        <h2>{stock.name} {stock.symbol} {stock.lastPrice}</h2>
        </Link>
      ))}
    </div>
  );
}
