import * as types from './types';
import * as authTypes from '../auth/types';

const getters = {
  [types.GET_COACHES]: (state) => state.coaches,
  [types.HAS_COACHES]: (state) => state.coaches && !state.loading && state.coaches.length > 0,
  [types.GET_SELECTED_COACH]: (state) => state.coaches.find((coach) => coach.id === state.selectedCoachId),
  [types.IS_USER_ON_COACH_LIST]: (state, getters, rootState, rootGetters) => {
    const coaches = getters[types.GET_COACHES];
    const userId = rootGetters[authTypes.GET_USER_ID];
    return coaches.some((coach) => coach.id === userId);
  },
  [types.GET_LOADING_FLAG]: (state) => state.loading,
  [types.GET_ERROR]: (state) => state.error,
};

export default getters;