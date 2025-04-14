// routes/animal.js

const express = require('express');
const router = express.Router();

// TEMP route just to test routing
router.get('/', (req, res) => {
  res.send('Animal Routes Working!');
});

module.exports = router;
