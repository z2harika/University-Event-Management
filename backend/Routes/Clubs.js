// Routes/Clubs.js

const express = require('express');
const router = express.Router();
const Club = require('../models/Club'); // Import the Club model

router.get('/clubs', async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    console.error('Error fetching club data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
