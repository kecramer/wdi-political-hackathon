const mongoose = require('mongoose');
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/wdi-political-hackathon';

mongoose.connect(connectionString);

module.exports.Email = require('./email.js');
