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
const fetchData = async (name, param) => {
  try {
    if (name === 'get') {
      if (param.id) {
        //단건 조회
        const { data } = await apiClient.get(`cleanEvents/${param.id}`);
        return data;
      } else {
        //다건 조회
        const { data } = await apiClient.get(`cleanEvents`);
        return data;
      }
      //이벤트 등록
    } else if (name === 'post') {
      const { data } = await apiClient.post(`cleanEvents`, param.obj);
      return data;
      //수정
    } else if (name === 'patch') {
      return await apiClient.patch(`cleanEvents/${param.id}`, param.obj);
      //삭제
    } else if (name === 'delete') {
      return await apiClient.delete(`cleanEvents/${param.id}`);
    }
  } catch (e) {
    //api Error
    if (e.reponse) {
      const errorStatus = getApiErrorStatusMessage(e.response.status, name);
      if (errorStatus) {
        throw new TypeError(errorStatus, 'api', name);
      }
      //서버에러
    } else {
      throw new TypeError(e, 'critical');
    }
  }
};

module.exports = fetchData;
