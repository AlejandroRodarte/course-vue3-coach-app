import coachesRoutes from './coaches/routes';
import UserAuth from '../pages/auth/UserAuth.vue';
import Coaches from '../pages/coaches/Coaches.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';
import guards from '../guards';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/auth',
    component: UserAuth,
    beforeEnter: guards.auth.anonymous
  },
  {
    path: '/coaches',
    component: Coaches,
    children: coachesRoutes
  },
  {
    path: '/register',
    component: CoachRegistration,
    beforeEnter: guards.auth.user
  },
  {
    path: '/requests',
    component: RequestsReceived,
    beforeEnter: guards.auth.user
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

export default routes;
