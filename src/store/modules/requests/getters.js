import * as types from './types';

const getters = {
  [types.GET_REQUESTS]: (state) => state.requests,
  [types.HAS_REQUESTS]: (state) => state.requests && state.requests.length > 0
};

export default getters;