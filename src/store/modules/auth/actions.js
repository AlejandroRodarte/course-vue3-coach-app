import * as types from './types';
import api from '../../../api';
import router from '../../../routes/router';

const actions = {
  [types.AUTHENTICATE]: async (ctx, payload) => {
    const { method, credentials } = payload;
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [response, error] = await api[method](credentials);
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    const now = new Date().getTime();
    const duration = +response.expiresIn * 1000;
    const mutateSetCredentialsPayload = {
      userId: response.localId,
      token: response.idToken,
      expirationDate: now + duration
    };
    localStorage.setItem('userData', JSON.stringify(mutateSetCredentialsPayload));
    ctx.commit(types.MUTATE_SET_CREDENTIALS, mutateSetCredentialsPayload);
    ctx.dispatch(types.SET_LOGOUT_TIMER, { duration });
  },
  [types.LOGIN]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signIn', credentials: payload });
  },
  [types.SIGNUP]: async (ctx, payload) => {
    await ctx.dispatch(types.AUTHENTICATE, { method: 'signUp', credentials: payload });
  },
  [types.CLEAR_ERROR]: (ctx) => ctx.commit(types.MUTATE_CLEAR_ERROR),
  [types.LOGOUT]: (ctx, payload) => {
    const timerId = ctx.getters[types.GET_TIMER_ID];
    if (timerId) clearTimeout(timerId);
    localStorage.removeItem('userData');
    ctx.commit(types.MUTATE_CLEAR_CREDENTIALS);
    const protectedRoutes = ['/register', '/requests'];
    const path = router.currentRoute.value.path;
    if (payload.redirect && protectedRoutes.includes(path)) router.replace('/auth');
  },
  [types.AUTO_LOGIN]: (ctx) => {
    const stringifiedUserData = localStorage.getItem('userData');
    if (!stringifiedUserData) return;
    const userData = JSON.parse(stringifiedUserData);
    const now = new Date().getTime();
    const duration = userData.expirationDate - now;
    const hasTokenExpired = duration <= 0;
    if (hasTokenExpired) {
      const payload = { redirect: true };
      ctx.dispatch(types.LOGOUT, payload);
      return;
    }
    ctx.commit(types.MUTATE_SET_CREDENTIALS, userData);
    ctx.dispatch(types.SET_LOGOUT_TIMER, { duration });
  },
  [types.SET_LOGOUT_TIMER]: (ctx, payload) => {
    const timerId = ctx.getters[types.GET_TIMER_ID];
    if (timerId) clearTimeout(timerId);
    const newTimerId = setTimeout(() => {
      const payload = { redirect: true };
      ctx.dispatch(types.LOGOUT, payload);
    }, payload.duration);
    ctx.commit(types.MUTATE_SET_TIMER_ID, { timerId: newTimerId });
  }
};

export default actions;