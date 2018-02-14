var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    // trim all white space
    trim: true
  },
  completedAt: {
    type: Number, default: (new Date()).getTime(),
    // default: null
  }
});

module.exports = {User};