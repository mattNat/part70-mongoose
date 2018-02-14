var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const { PORT, DATABASE_URL } = require('../config');
mongoose.connect(DATABASE_URL)
  .then(instance => {
    const conn = instance.connections[0];
    console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error('\n === Did you remember to start `mongod`? === \n');
    console.error(err);
  });

// get back the mongoose var that comes from lib
module.exports = {mongoose};