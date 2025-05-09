const axiosClient = require('axios');

exports.fetchAllCountries = async () => {
  const res = await axiosClient.get('https://restcountries.com/v3.1/all');
  return res.data.map(c => ({ name: c.name.common, flag: c.flags.svg }));
};

exports.fetchCountryDetails = async (name) => {
  const res = await axiosClient.get(`https://restcountries.com/v3.1/name/${name}`);
  const country = res.data[0];
  return {
    name: country.name.common,
    population: country.population,
    capital: country.capital ? country.capital[0] : 'N/A'
  };
};
