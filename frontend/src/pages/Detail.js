import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { name } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/countries/${name}`).then(res => setDetails(res.data));
  }, [name]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{details.name}</h1>
      <p>Capital: {details.capital}</p>
      <p>Population: {details.population}</p>
    </div>
  );
};

export default Detail;
