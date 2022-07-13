const express = require('express');

const router = express.Router();
const urlShorteningController = require('../contollers/urlShorteningController');

router.get('/', urlShorteningController.shortenUrl);

