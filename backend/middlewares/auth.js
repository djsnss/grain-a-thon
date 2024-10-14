const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const authenticateAdmin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const admin = await Admin.findOne({ _id: decoded._id });
    
    if (!admin) {
      throw new Error();
    }
    
    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = authenticateAdmin;