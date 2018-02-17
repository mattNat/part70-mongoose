var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { DATABASE_URL } = require('../../config');

const Todo = require('../../models/todo');
const User = require('../../models/user');

const seedTodos = require('./todos');
const seedUsers = require('./users');

mongoose.connect(DATABASE_URL)
  .then(() => {
    return mongoose.connection.db.dropDatabase()
      .then(result => {
        console.info(`Dropped Database: ${result}`);
      });
  })
  .then(() => {
    return Todo.insertMany(seedTodos)
      .then(results => {
        console.info(`Inserted ${results.length} Todos`);
      })
  })
  .then(() => {
    return User.insertMany(seedUsers)
      .then(results => {
        console.info(`Inserted ${results.length} Users`);
      });
  })
  .then(() => {return Todo.createIndexes()})
  .then(() => {return User.createIndexes()})
  .then(() => {
    return mongoose.disconnect()
      .then(() => {
        console.info('Disconnected');
      });
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });