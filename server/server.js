const express = require('express');
// take JSON and convert it to object
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb'); 

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

// middleware give to express
// send json to express application
app.use(bodyParser.json());

// set up post route
app.post('/todos', (req, res) => {
  // // body gets stored by body-parser, post on postman will print
  // console.log(req.body);

  var todo = new Todo({
    // store what is being posted in postman
    text: req.body.text
  })
  
  todo.save().then((doc) => {
    // send back todo
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
})

// GET /todos/1253sdffasf
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    // object allows a more flexible future
    res.send({todos})
  }), (e) => {
    res.status(400).send(e);
  }
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  // // allow us to test in postman
  // res.send(req.params);

  // verify if valid id
  if (!ObjectID.isValid(id)) {
    // console.log('ID not valid');
    return res.status(404).send();
  }

  // Todo.findById(id, function (err, product) {
    // console.log(product);
  Todo.findById(id)
    .select()
    .then(todo => {
      if (!todo) {
        return res.status(404).send()
      }
      res.send({todo});
    }).catch(e => res.status(400).send())

    // .then(todo => {
    //   if (!todo) {
    //     return res.status(404).send();
    //   }
    //   // return (JSON.stringify(todo, undefined, 2));
    //   // {} gives flexibility, can add
    //   res.send({todo});
    // })
    // .catch(e => res.status(400)).send();

});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};