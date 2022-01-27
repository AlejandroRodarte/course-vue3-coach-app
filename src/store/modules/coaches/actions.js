import * as types from './types';
import * as authTypes from '../auth/types';

const actions = {
  [types.SELECT_COACH_ID]: (ctx, payload) => ctx.commit(types.MUTATE_SELECT_COACH_ID, payload),
  [types.ADD_COACH]: (ctx, payload) => {
    const { form } = payload;
    const formattedForm = {
      id: ctx.rootGetters[authTypes.GET_USER_ID],
      firstName: form.names.first,
      lastName: form.names.last,
      description: form.description,
      hourlyRate: form.rate,
      areas: form.areas
    };
    const mutateAddCoachPayload = { newCoach: formattedForm };
    ctx.commit(types.MUTATE_ADD_COACH, mutateAddCoachPayload);
  }
};

export default actions;