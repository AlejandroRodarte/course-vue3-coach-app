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
    ctx.commit(types.MUTATE_SET_CREDENTIALS, mutateSetCredentialsPayload);
  },
  [types.LOGIN]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signIn', credentials: payload });
  },
  [types.SIGNUP]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signUp', credentials: payload });
  },
  [types.CLEAR_ERROR]: (ctx) => ctx.commit(types.MUTATE_CLEAR_ERROR)
};

export default actions;