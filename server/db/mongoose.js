var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { PORT, DATABASE_URL } = require('../config');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://dbuser:dev@ds239648.mlab.com:39648/udemy-node-project' || DATABASE_URL)
  .then(instance => {
    // console.log(instance);
    
    const conn = instance.connections[0];
    // console.log(conn);
    
    console.info(`Connected to: mongodb://${conn.host}:${conn.port}/${conn.name}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    // console.log(DATABASE_URL);
    
    console.error('\n === Did you remember to start `mongod`? === \n');
    console.error(err);
  });

// get back the mongoose var that comes from lib
module.exports = {mongoose};