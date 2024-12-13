#!/usr/bin/node

const express = require('express');
const loadRoutes = require('./routes').default;

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
loadRoutes(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
