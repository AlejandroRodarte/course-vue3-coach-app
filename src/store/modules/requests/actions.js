import * as types from './types';
import * as authTypes from '../auth/types';
import api from '../../../api';

const actions = {
  [types.SET_REQUESTS]: async (ctx) => {
    const userId = ctx.rootGetters[authTypes.GET_USER_ID];
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [response, error] = await api.getRequests({ id: userId });
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    const requests = Object.keys(response).map((key) => ({
      id: key,
      ...response[key]
    }));
    ctx.commit(types.MUTATE_SET_REQUESTS, { requests });
    ctx.commit(types.MUTATE_SET_FETCH_TIMESTAMP);
  },
  [types.ADD_REQUEST]: async (ctx, payload) => {
    const { form } = payload;
    const formattedForm = {
      request: {
        coachId: form.coachId,
        userEmail: form.email,
        message: form.message
      }
    };
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [, error] = await api.addRequest({ id: form.coachId, request: formattedForm.request });
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    ctx.commit(types.MUTATE_ADD_REQUEST, formattedForm);
  },
  [types.CLEAR_ERROR]: (ctx) => ctx.commit(types.MUTATE_CLEAR_ERROR)
};

export default actions;