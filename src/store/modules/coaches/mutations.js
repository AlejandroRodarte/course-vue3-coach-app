import * as types from './types';

const mutations = {
  [types.MUTATE_SELECT_COACH_ID]: (state, payload) => state.selectedCoachId = payload.selectedCoachId,
  [types.MUTATE_ADD_COACH]: (state, payload) => state.coaches.push(payload.newCoach),
  [types.MUTATE_SET_COACHES]: (state, payload) => state.coaches = payload.coaches
};

export default mutations;