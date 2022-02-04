import store from '../../store';
import * as authTypes from '../../store/modules/auth/types';

const user = (to, from, next) => {
  const isAuthenticated = store.getters[authTypes.IS_AUTHENTICATED];
  if (isAuthenticated) next();
  else next('/auth');
};

export default user;