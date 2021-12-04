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
const fetchData = async (name, { method, table, id, obj }) => {
  /**
   * dbParam : {
   *  method : '',
   *  table : '',
   *  id : ''
   * }
   */
  try {
    //조회
    if (method === 'get') {
      const { data } = await apiClient.get(`${table}${id ? `/${id}` : ``}`);
      return data;
      //이벤트 등록
    } else if (method === 'post') {
      const { data } = await apiClient.post(`${table}`, obj);
      return data;
      //수정
    } else if (method === 'patch') {
      return await apiClient.patch(`${table}/${id}`, obj);
      //삭제
    } else if (method === 'delete') {
      await apiClient.delete(`${table}/${id}`);
      return null;
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
