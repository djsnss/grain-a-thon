const express = require('express');
const mongoose = require('mongoose');
const donorRoutes = require('./routes/donorRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const adminRoutes = require('./routes/adminRoutes');
const connectDB = require('./config/db')

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use('/donors', donorRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/admins', adminRoutes);

module.exports = app;