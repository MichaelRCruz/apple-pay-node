'use strict';

const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  // waiting to see something
});

// virtuals reminder
// postSchema.virtual('addressString').get(function() {
//   return `${this.address.building} ${this.address.street}`.trim()});
//
// postSchema.virtual('grade').get(function() {
//   const gradeObj = this.grades.sort((a, b) => {return b.date - a.date})[0] || {};
//   return gradeObj.grade;
// });

postSchema.methods.serialize = function() {
  return {
    // not sure yet
  };
}

const Post = mongoose.model('Post', postSchema);

module.exports = {Post};
