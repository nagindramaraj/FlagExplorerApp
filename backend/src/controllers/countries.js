const countryService = require('../services/countries');

exports.getAllCountries = async (req, res) => {
  try {
    const data = await countryService.fetchAllCountries();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCountryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const data = await countryService.fetchCountryDetails(name);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
