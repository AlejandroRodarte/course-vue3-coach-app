import * as types from './types';

const getters = {
  [types.GET_COACHES]: (state) => state.coaches,
  [types.HAS_COACHES]: (state) => state.coaches && state.coaches.length > 0
};

export default getters;