import * as types from './types';
import * as authTypes from '../auth/types';

const getters = {
  [types.GET_REQUESTS]: (state, getters, rootState, rootGetters) => {
    const userId = rootGetters[authTypes.GET_USER_ID];
    return state.requests.filter((request) => request.coachId === userId);
  },
  [types.HAS_REQUESTS]: (state, getters) => {
    const requests = getters[types.GET_REQUESTS];
    return requests && !state.loading && requests.length > 0;
  },
  [types.GET_LOADING_FLAG]: (state) => state.loading,
  [types.GET_ERROR]: (state) => state.error
};

export default getters;