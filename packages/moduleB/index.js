const { map } = require('lodash');
const { v4: uuidV4 } = require('uuid');

module.exports = map([1, 2, 3], (n) => {
  return n + '~' + uuidV4();
});
