import * as types from './types';
import * as authTypes from '../auth/types';
import api from '../../../api';

const actions = {
  [types.SELECT_COACH_ID]: (ctx, payload) => ctx.commit(types.MUTATE_SELECT_COACH_ID, payload),
  [types.ADD_COACH]: async (ctx, payload) => {
    const { form } = payload;
    const userId = ctx.rootGetters[authTypes.GET_USER_ID];
    const formattedForm = {
      firstName: form.names.first,
      lastName: form.names.last,
      description: form.description,
      hourlyRate: form.rate,
      areas: form.areas
    };
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [, error] = await api.addCoach({ id: userId, coach: formattedForm });
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    const mutateAddCoachPayload = { newCoach: { ...formattedForm, id: userId } };
    ctx.commit(types.MUTATE_ADD_COACH, mutateAddCoachPayload);
  },
  [types.SET_COACHES]: async (ctx) => {
    ctx.commit(types.MUTATE_SET_LOADING_FLAG);
    const [response, error] = await api.getCoaches();
    if (error) {
      ctx.commit(types.MUTATE_SET_ERROR, { error: error.message });
      return;
    }
    const coaches = Object.keys(response).map((key) => ({
      id: key,
      ...response[key]
    }));
    ctx.commit(types.MUTATE_SET_COACHES, { coaches });
  },
  [types.CLEAR_ERROR]: (ctx) => ctx.commit(types.MUTATE_CLEAR_ERROR)
};

export default actions;