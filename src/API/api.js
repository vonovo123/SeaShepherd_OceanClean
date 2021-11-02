const fetchData = require('./fetchData.js');
const api = {
  getCleanEvents: url => fetchData(url, 'getCleanEvents'),
};

module.exports = api;
