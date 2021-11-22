const TypeError = require('../util/TypeError.js');
const axios = require('axios');
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'multipart/form-data' },
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
const fetchData = async (formData, name) => {
  try {
    const data = await apiClient.post('/src/assets/images', formData);
    return data.data;
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
