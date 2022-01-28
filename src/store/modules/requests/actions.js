import * as types from './types';

const actions = {
  [types.ADD_REQUEST]: (ctx, payload) => {
    const { form } = payload;
    const mutateAddRequestPayload = {
      request: {
        id: new Date().toISOString(),
        coachId: form.coachId,
        userEmail: form.email,
        message: form.message
      }
    };
    ctx.commit(types.MUTATE_ADD_REQUEST, mutateAddRequestPayload);
  }
};

export default actions;