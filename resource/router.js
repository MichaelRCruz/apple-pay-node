'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const {Resource} = require('./models');
const router = express.Router();
const jsonParser = bodyParser.json();

router.post('/', jsonParser, (req, res) => {
  return res.json(req.body);
});

router.get('/', (req, res) => {
  return res.json('this is resource');
});

module.exports = {router};
