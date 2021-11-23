const TypeError = require('../util/TypeError.js');
const axios = require('axios');
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

const statusErrorMessages = [
  false,
  'Redirects Error',
  'Client Error',
  'Server Error',
];

const getApiErrorStatusMessage = (status, name) => {
  const errorType = [300, 400, 500, 600];
  for (let i = 0; i < errorType.length; i++) {
    const type = errorType[i];
    if (status < type) {
      if (type === 300) return false;
    }
    return `API request error : ${statusErrorMessages[i]} with status code ${status} from ${name}`;
  }
};
const fetchData = async (url, name, param) => {
  try {
    if (name === 'getCleanEvents') {
      //전체 이벤트 조회
      const data = await apiClient.get(url);
      return data.data;
      //이벤트 등록
    } else if (name === 'setCleanEvent') {
      console.log(param);
      return apiClient.post(url, param);
    }
  } catch (e) {
    //api Error
    if (e.reponse) {
      const errorStatus = getApiErrorStatusMessage(e.response.status, name);
      if (errorStatus) {
        throw new TypeError(errorStatus, 'api');
      }
      //서버에러
    } else {
      throw new TypeError(e, 'critical');
    }
  }
};

module.exports = fetchData;
