import * as types from './types';
import * as authTypes from '../auth/types';

const getters = {
  [types.GET_REQUESTS]: (state, getters, rootState, rootGetters) => {
    const userId = rootGetters[authTypes.GET_USER_ID];
    return state.requests.filter((request) => request.coachId === userId);
  },
  [types.HAS_REQUESTS]: (state, getters) => {
    const requests = getters[types.GET_REQUESTS];
    return requests && requests.length > 0;
  }
};

export default getters;