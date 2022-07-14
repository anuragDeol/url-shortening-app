const express = require('express');

const router = express.Router();
const urlShorteningController = require('../contollers/urlShorteningController');

router.get('/', urlShorteningController.home);
router.post('/shortenUrl', urlShorteningController.shortenUrl);
router.get('/:link', urlShorteningController.visit);

module.exports = router;