const fetchData = require('./fetchData.js');
const fetchFileData = require('./fetchFileData.js');

const api = {
  getCleanEvents: url => fetchData(url, 'getCleanEvents'),
  setImageFiles: formData => fetchFileData(formData, 'setImageFiles'),
};

module.exports = api;
