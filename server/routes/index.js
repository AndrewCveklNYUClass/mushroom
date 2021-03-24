const express = require('express');
const mushroomRoutes = require('./mushroom.route');
const router = express.Router();
router.get('/', function (req, res) {
  res.send('API works!');
});
router.use('/mushrooms', mushroomRoutes);
module.exports = router;