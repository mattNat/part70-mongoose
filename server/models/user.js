var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('User', userSchema);