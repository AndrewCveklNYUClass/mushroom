const express = require('express');
const MushroomCtrl = require('../controllers/mushroom.controller');
const router = express.Router();
router.get('/:id', MushroomCtrl.get);
module.exports = router;