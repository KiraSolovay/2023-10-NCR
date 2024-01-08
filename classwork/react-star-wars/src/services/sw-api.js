export function getAllStarships() {
    // Fetch all starships from SWAPI
    return fetch('https://swapi.dev/api/starships/')
      .then(response => response.json())
      .then(data => data.results);
  }