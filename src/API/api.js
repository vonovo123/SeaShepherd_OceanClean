const fetchData = require('./fetchData.js');

const api = {
  /**
   * dbParam : {
   *  method : '',
   *  table : '',
   *  id : ''
   *  obj : ''
   * }
   */
  fetch: (name, param) => fetchData(name, param),
};

module.exports = api;
