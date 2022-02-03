import * as types from './types';

const mutations = {
  [types.MUTATE_SET_CREDENTIALS]: (state, payload) => {
    state.error = null;
    state.userId = payload.userId;
    state.token = payload.token;
    state.expirationDate = payload.expirationDate;
    state.loading = false;
  },
  [types.MUTATE_SET_LOADING_FLAG]: (state) => {
    state.error = null;
    state.loading = true;
  },
  [types.MUTATE_SET_ERROR]: (state, payload) => {
    state.error = payload.error,
    state.loading = false
  },
  [types.MUTATE_CLEAR_ERROR]: (state) => state.error = null,
  [types.MUTATE_CLEAR_CREDENTIALS]: (state) => {
    state.error = null;
    state.loading = false;
    state.userId = null;
    state.token = null;
    state.expirationDate = null;
  }
};

export default mutations;