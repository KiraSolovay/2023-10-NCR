import React, { useEffect, useState } from 'react';
import { getAllStarships } from './services/sw-api';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    // Fetch starships data when the component mounts
    getAllStarships().then(data => setStarships(data));
  }, []);

  return (
    <div className="app">
      {starships.map(starship => (
        <div key={starship.name}>
          <p>{starship.name}</p>
          {/* Add other starship information as needed */}
        </div>
      ))}
    </div>
  );
};

export default App;