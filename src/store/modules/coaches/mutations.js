import * as types from './types';

const mutations = {
  [types.MUTATE_SELECT_COACH_ID]: (state, payload) => state.selectedCoachId = payload.selectedCoachId
};

export default mutations;