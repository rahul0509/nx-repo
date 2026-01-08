import express from 'express';
import cors from 'cors';
const app = express();
const routes = require('./route');

app.use(cors());

// add these so req.body is populated for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

module.exports = app;
