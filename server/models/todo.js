var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    // trim all white space
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number, default: (new Date()).getTime(),
    default: null
  }
});

// export model otherwise we can't use it!
module.exports = {Todo};