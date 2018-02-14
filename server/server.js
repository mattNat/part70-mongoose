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

})

// GET /todos/1253sdffasf

app.listen(3000, () => {
  console.log('Started on port 3000');
});

