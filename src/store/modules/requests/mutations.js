import * as types from './types';

const mutations = {
  [types.MUTATE_ADD_REQUEST]: (state, payload) => state.requests.push(payload.request)
};

export default mutations;