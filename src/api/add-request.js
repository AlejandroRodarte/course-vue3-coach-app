import axios from '../axios/api';

const addRequest = async (payload) => {
  try {
    const response = await axios.post(`/requests/${payload.id}.json`, payload.request);
    return [response.data, undefined];
  } catch (e) {
    return [undefined, new Error('An error occured while adding the request.')];
  }
};

export default addRequest;