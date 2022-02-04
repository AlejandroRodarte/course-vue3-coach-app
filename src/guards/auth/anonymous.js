import store from '../../store';
import * as authTypes from '../../store/modules/auth/types';

const anonymous = (to, from, next) => {
  const isAuthenticated = store.getters[authTypes.IS_AUTHENTICATED];
  if (!isAuthenticated) next();
  else next('/coaches');
};

export default anonymous;