const express = require('express');
const Donor = require('../models/donor');
const authenticateAdmin = require('../middlewares/auth');

const router = express.Router();

router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const donor = new Donor(req.body);
    await donor.save();
    res.status(201).send(donor);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find({});
    res.send(donors);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/:id', authenticateAdmin, async (req, res) => {
  try {
    const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!donor) {
      return res.status(404).send();
    }
    res.send(donor);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id);
    if (!donor) {
      return res.status(404).send();
    }
    res.send(donor);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
