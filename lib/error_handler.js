'use strict';

module.exports = exports = function(err) {
  process.stdout.write(err + '\n');
  this.response.status(500);
  this.response.body = 'database error';
};
