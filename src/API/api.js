import fetchData, { transactionFetchData } from './fetchData.js';

const api = {
  fetch: (name, param) => fetchData(name, param),
  transactionFetchData: (...params) => transactionFetchData(...params),
};

export default api;
