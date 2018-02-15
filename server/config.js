'use strict';
// exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://admin:admin123@127.0.0.1/TodoApp?authSource=admin';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://admin:admin123@localhost/TodoApp?authSource=admin';

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://admin:admin123@localhost/test-TodoApp?authSource=admin';
exports.PORT = process.env.PORT || 27017;