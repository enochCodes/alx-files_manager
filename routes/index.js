#!/usr/bin/node
const AppController = require('../controllers/AppController');

export default (app) => {
  app.get('/status', AppController.getStatus);
  app.get('/stats', AppController.getStats);
};
