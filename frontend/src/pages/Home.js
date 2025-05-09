import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Import the CSS

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/countries').then(res => setCountries(res.data));
  }, []);

  return (
    <div className="flags-container">
      {countries.map(c => (
        <div key={c.name} className="flag-item">
          <Link to={`/country/${c.name}`}>
            <img src={c.flag} alt={c.name} />
            <p>{c.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
