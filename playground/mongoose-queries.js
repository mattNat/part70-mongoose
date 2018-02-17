// const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
mongoose.Promise = global.Promise;

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// var id = '000000000000000000000000';

// //ObjectId.isValid
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });

// will get null back for single doc not there
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   // output error if query id has no db match
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo By Id: ', todo);
// }).catch(e => console.log(e));

// query the user's collection
var id = '111111111111111111111101';
User.findById(id)
  .then(user => {
    if (!user) {
      return console.log('User not found');
    }
    // console.log('User is', user);
    console.log(JSON.stringify(user, undefined, 2));
  }).catch(e => console.log(e));