const fetchData = require('./fetchData.js');

const api = {
  getCleanEvents: url => fetchData(url, 'getCleanEvents'),
  setCleanEvent: (url, event) => fetchData(url, 'setCleanEvent', event),
};

module.exports = api;
