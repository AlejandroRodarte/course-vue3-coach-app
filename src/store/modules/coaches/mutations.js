import * as types from './types';

const mutations = {
  [types.MUTATE_SELECT_COACH_ID]: (state, payload) => state.selectedCoachId = payload.selectedCoachId,
  [types.MUTATE_ADD_COACH]: (state, payload) => {
    state.error = null;
    state.coaches.push(payload.newCoach);
    state.loading = false;
  },
  [types.MUTATE_SET_COACHES]: (state, payload) => {
    state.error = null;
    state.coaches = payload.coaches;
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
  [types.MUTATE_CLEAR_ERROR]: (state) => state.error = null
};

export default mutations;