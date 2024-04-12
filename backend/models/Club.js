// Models/Club.js

const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: String,
  img:String,
  description: String
});

module.exports = mongoose.model('Club', clubSchema);
    