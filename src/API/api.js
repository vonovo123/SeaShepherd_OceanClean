import fetchData from './fetchData.js';

const api = {
  fetch: (name, param) => fetchData(name, param),
};

export default api;
