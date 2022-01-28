import axios from '../axios/api';

const addCoach = async (payload) => {
  try {
    const response = await axios.put(`/coaches/${payload.id}.json`, payload.coach);
    return [response.data, undefined];
  } catch (e) {
    return [undefined, new Error('An error occured while adding the coach.')];
  }
};

export default addCoach;