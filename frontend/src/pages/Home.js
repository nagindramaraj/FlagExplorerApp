import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Import the CSS

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/countries')
      .then(res => setCountries(res.data))
      .catch(err => console.error("Failed to load countries", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Flag Explorer</h1>
      <div className="flags-container grid grid-cols-2 md:grid-cols-4 gap-4">
        {countries.map((country) => (
          <Link
            to={`/detail/${country.name}`}
            key={country.name}
            className="border p-2 text-center block hover:shadow"
          >
            <img src={country.flag} alt={country.name} className="w-full h-24 object-contain mb-2" />
            <div>{country.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
