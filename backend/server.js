const expressServer = require('express');
const cors = require('cors');
const countriesRouter = require('./src/routes/countries');

const app = expressServer();
app.use(cors());
app.use(expressServer.json());
app.use('/countries', countriesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
