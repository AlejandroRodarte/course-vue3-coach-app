import axios from '../axios/auth';

const signUp = async (payload) => {
  try {
    const body = {
      ...payload,
      returnSecureToken: true
    };
    const response = await axios.post(`:signUp?key=${process.env.VUE_APP_FIREBASE_WEB_API_KEY}`, body);
    return [response.data, undefined];
  } catch (e) {
    return [undefined, new Error('An error occured while trying to signing you up.')];
  }
};

export default signUp;