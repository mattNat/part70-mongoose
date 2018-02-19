const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
mongoose.Promise = global.Promise;

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Delete mutliple records
// Todo.remove({})
// .then(result => {
//   console.log(result);
// })

// get info back when
// Todo.findOneAndRemove()

// get info back also
// Todo.findByIdAndRemove()

Todo.findByIdAndRemove('000000000000000000000000')
  .then(todo => {
    console.log(todo);
  })