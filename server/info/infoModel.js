var mongoose = require('mongoose');

var infoSchema = new mongoose.Schema({
  username: String,
  brand: String,
  url: String,
  amazonUser: String
});

module.exports = mongoose.model('info', infoSchema);