import axios from '../axios/api';

const getCoaches = async () => {
  try {
    const response = await axios.get('/coaches.json');
    return [response.data || [], undefined];
  } catch (e) {
    return [undefined, new Error('An error occured while fetching the list of coaches.')];
  }
};

export default getCoaches;