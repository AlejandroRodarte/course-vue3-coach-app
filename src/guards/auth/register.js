import store from '../../store';
import * as authTypes from '../../store/modules/auth/types';
import * as coachesTypes from '../../store/modules/coaches/types';

const register = async (to, from, next) => {
  const isAuthenticated = store.getters[authTypes.IS_AUTHENTICATED];
  if (!isAuthenticated) next('/auth');
  const hasCoaches = store.getters[coachesTypes.HAS_COACHES];
  if (!hasCoaches) await store.dispatch(coachesTypes.SET_COACHES);
  const isUserOnCoachList = store.getters[coachesTypes.IS_USER_ON_COACH_LIST];
  if (isUserOnCoachList) next('/coaches');
  else next();
};

export default register;