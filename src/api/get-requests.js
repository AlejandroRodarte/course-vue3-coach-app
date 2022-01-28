import axios from '../axios/api';

const getRequests = async (payload) => {
  try {
    const response = await axios.get(`/requests/${payload.id}.json`);
    return [response.data, undefined];
  } catch (e) {
    return [undefined, new Error('An error occured while fetching the list of requests.')];
  }
};

export default getRequests;