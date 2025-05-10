const request = require('supertest');
const express = require('express');
const countriesRouter = require('../src/routes/countries');

const app = express();
app.use(express.json());
app.use('/countries', countriesRouter);

describe('GET /countries', () => {
  it('should return a list of countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
