var express = require('express');
// take JSON and convert it to object
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
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

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};