// 'use strict';
//
// const mongoose = require('mongoose');
//
// const paymentSchema = mongoose.Schema({
//   // waiting to see what apple pay API does
// });
// 
// // virtuals reminder
// paymentSchema.virtual('addressString').get(function() {
//   return `${this.address.building} ${this.address.street}`.trim()});
//
// paymentSchema.virtual('grade').get(function() {
//   const gradeObj = this.grades.sort((a, b) => {return b.date - a.date})[0] || {};
//   return gradeObj.grade;
// });
//
// paymentSchema.methods.serialize = function() {
//   return {
//     // not sure yet
//   };
// }
//
// const Payment = mongoose.model('Payment', paymentSchema);
//
// module.exports = {Payment};
