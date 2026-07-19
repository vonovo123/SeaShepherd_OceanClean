import TypeError from '@/util/TypeError.js';
import {
  getData,
  postData,
  patchData,
  deleteData,
  batchWrite,
} from '@/util/firebase.js';

const fetchData = async (name, { method, table, id, obj }) => {
  try {
    if (method === 'get') {
      return await getData(table, id);
    }
    if (method === 'post') {
      return await postData(table, id, obj);
    }
    if (method === 'patch') {
      return await patchData(table, id, obj);
    }
    if (method === 'delete') {
      return await deleteData(table, id);
    }
  } catch {
    throw new TypeError(
      '서버에러입니다 <br/> 잠시후 다시 시도해주세요.',
      'critical',
      'firebase'
    );
  }
};

export const transactionFetchData = async (...params) => {
  try {
    await batchWrite(...params);
  } catch {
    throw new TypeError(
      '서버에러입니다<br/>잠시후 다시 시도해주세요.',
      'critical',
      'firebase'
    );
  }
};

export default fetchData;
