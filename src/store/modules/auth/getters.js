import * as types from './types';

const getters = {
  [types.GET_USER_ID]: (state) => state.userId,
  [types.GET_LOADING_FLAG]: (state) => state.loading,
  [types.GET_ERROR]: (state) => state.error,
  [types.GET_TOKEN]: (state) => state.token,
  [types.IS_AUTHENTICATED]: (state) => !!state.token,
  [types.GET_TIMER_ID]: (state) => state.timerId
};

export default getters;