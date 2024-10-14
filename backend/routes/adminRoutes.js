const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const admin = new Admin({ username, password: hashedPassword });
    await admin.save();
    res.status(201).send({ message: 'Admin created successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      throw new Error('Unable to login');
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      throw new Error('Unable to login');
    }
    const token = jwt.sign({ _id: admin._id.toString() }, 'your_jwt_secret');
    res.send({ admin, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;