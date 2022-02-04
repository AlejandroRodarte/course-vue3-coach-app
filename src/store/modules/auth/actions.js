import * as types from './types';
import api from '../../../api';

const actions = {
  [types.AUTHENTICATE]: async (ctx, payload) => {
    const { method, credentials } = payload;
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [response, error] = await api[method](credentials);
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    const mutateSetCredentialsPayload = {
      userId: response.localId,
      token: response.idToken,
      expirationDate: new Date().getTime() + (+response.expiresIn * 1000)
    };
    localStorage.setItem('userData', JSON.stringify(mutateSetCredentialsPayload));
    ctx.commit(types.MUTATE_SET_CREDENTIALS, mutateSetCredentialsPayload);
  },
  [types.LOGIN]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signIn', credentials: payload });
  },
  [types.SIGNUP]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signUp', credentials: payload });
  },
  [types.CLEAR_ERROR]: (ctx) => ctx.commit(types.MUTATE_CLEAR_ERROR),
  [types.LOGOUT]: (ctx) => {
    localStorage.removeItem('userData');
    ctx.commit(types.MUTATE_CLEAR_CREDENTIALS);
  },
  [types.AUTO_LOGIN]: (ctx) => {
    const stringifiedUserData = localStorage.getItem('userData');
    if (!stringifiedUserData) return;
    const userData = JSON.parse(stringifiedUserData);
    ctx.commit(types.MUTATE_SET_CREDENTIALS, userData);
  }
};

export default actions;