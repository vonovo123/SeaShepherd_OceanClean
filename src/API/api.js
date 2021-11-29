const fetchData = require('./fetchData.js');

const api = {
  //이벤트 다건조회
  getCleanEvent: param => fetchData('get', param),
  //이벤트 등록
  setCleanEvent: param => fetchData('post', param),
  //이벤트 업데이트
  updateCleanEvent: param => fetchData('patch', param),
  //이벤트 삭제
  deleteCleanEvent: param => fetchData('delete', param),
};

module.exports = api;
