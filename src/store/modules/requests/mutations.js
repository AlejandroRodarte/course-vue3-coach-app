import * as types from './types';

const mutations = {
  [types.MUTATE_SET_REQUESTS]: (state, payload) => {
    state.loading = false;
    state.requests = payload.requests;
    state.error = null;
  },
  [types.MUTATE_ADD_REQUEST]: (state, payload) => {
    state.loading = false;
    state.requests.push(payload.request);
    state.error = null;
  },
  [types.MUTATE_SET_LOADING_FLAG]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [types.MUTATE_SET_ERROR]: (state, payload) => {
    state.loading = false;
    state.error = payload.error;
  },
  [types.MUTATE_CLEAR_ERROR]: (state) => state.error = null,
  [types.MUTATE_SET_FETCH_TIMESTAMP]: (state) => state.lastFetchTimestamp = new Date().getTime()
};

export default mutations;