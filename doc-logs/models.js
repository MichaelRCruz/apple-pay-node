'use strict';
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DocLogSchema = mongoose.Schema({ any: Object });

// DocLogSchema.methods.serialize = function() {
//   return {
//     username: this.username || '',
//     firstName: this.firstName || '',
//     lastName: this.lastName || ''
//   };
// };

const DocLog = mongoose.model('DocLog', DocLogSchema);

module.exports = {DocLog};
