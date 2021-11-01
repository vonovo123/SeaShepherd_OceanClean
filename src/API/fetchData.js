const axios = require('axios');
const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  // ,withCredentials: false
  // ,headers: {
  //     Accept: 'application/json',
  //     'Content-type' : 'application/json'
  // }
});
const fetchData = async (url, name) => {
  const { data } = await apiClient.get(url);
  console.log(data);
  return data;
};

module.exports = fetchData;
