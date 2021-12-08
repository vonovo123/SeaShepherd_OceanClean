import TypeError from '../util/TypeError.js';
//const { getDate } = require('../util/firebase.js');
//const TypeError = require('../util/TypeError.js');
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
import { getData, postData, patchData, deleteData } from '../util/firebase.js';
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
      return await getData(table, id);
      //이벤트 등록
    } else if (method === 'post') {
      return await postData(table, id, obj);
      //수정
    } else if (method === 'patch') {
      return await patchData(table, id, obj);
      //삭제
    } else if (method === 'delete') {
      return await deleteData(table, id);
    }
  } catch (e) {
    console.log(e);
    // //api Error
    // if (e.reponse) {
    //   const errorStatus = getApiErrorStatusMessage(e.response.status, name);
    //   if (errorStatus) {
    //     throw new TypeError(errorStatus, 'api', name);
    //   }
    //   //서버에러
    // } else {
    //   throw new TypeError(e, 'critical');
    // }
  }
};

export default fetchData;
//module.exports = fetchData;
