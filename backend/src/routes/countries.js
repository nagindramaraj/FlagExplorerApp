const expressRouter = require('express');
const countryRouter = expressRouter.Router();
const { getAllCountries, getCountryByName } = require('../controllers/countries');

countryRouter.get('/', getAllCountries);
countryRouter.get('/:name', getCountryByName);

module.exports = countryRouter;
