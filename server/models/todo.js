// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// var todoSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     // trim all white space
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number, default: (new Date()).getTime(),
//     default: null
//   }
// });

// // export model otherwise we can't use it!
// module.exports = mongoose.model('Todo', todoSchema);

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};