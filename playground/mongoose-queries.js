const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '5a8672b2d763f36274a1896b11';

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
User.findById