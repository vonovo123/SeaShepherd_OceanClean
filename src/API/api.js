const fetchData = require('./fetchData.js');
console.log(`fetchData : ${fetchData}`);
const api = {
  getEvents: url => fetchData(url, 'getEvents'),
};

module.exports = api;
