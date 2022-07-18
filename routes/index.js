const express = require('express');

const router = express.Router();
const urlShorteningController = require('../contollers/urlShorteningController');

router.get('/', urlShorteningController.home);
router.get('/allUrls', urlShorteningController.allUrls);
router.get('/:link', urlShorteningController.visit);
router.post('/shortenUrl', urlShorteningController.shortenUrl);

module.exports = router;