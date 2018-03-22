'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DocLogSchema = mongoose.Schema({
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

DocLogSchema.methods.serialize = function() {
  return {
    username: this.username || '',
    firstName: this.firstName || '',
    lastName: this.lastName || ''
  };
};

const DocLog = mongoose.model('DocLog', DocLogSchema);

module.exports = {DocLog};
