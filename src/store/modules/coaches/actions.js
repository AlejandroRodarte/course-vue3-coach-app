import * as types from './types';

const actions = {
  [types.SELECT_COACH_ID]: (ctx, payload) => ctx.commit(types.MUTATE_SELECT_COACH_ID, payload) 
};

export default actions;