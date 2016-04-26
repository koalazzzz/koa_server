'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var jazzmasterSchema = new Schema({
  name: { type: String, unique: true },
  instrument: String,
  facialHair: Boolean
});

module.exports = exports = mongoose.model('Jazzmaster', jazzmasterSchema);
