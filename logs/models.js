'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const LogSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {type: String, default: ''},
  lastName: {type: String, default: ''}
});

LogSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
  };
};

const Log = mongoose.model('Log', LogSchema);

module.exports = {Log};
