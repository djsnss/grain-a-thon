const express = require('express');
const Donor = require('../models/donor');

const router = express.Router();

router.get('/department', async (req, res) => {
  try {
    const leaderboard = await Donor.aggregate([
      {
        $group: {
          _id: "$department",
          totalGrainCollected: { $sum: "$grainCollected" }
        }
      },
      {
        $sort: { totalGrainCollected: -1 }
      }
    ]);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/individual', async (req, res) => {
  try {
    const leaderboard = await Donor.find({}).sort('-grainCollected').limit(10);
    res.send(leaderboard);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;