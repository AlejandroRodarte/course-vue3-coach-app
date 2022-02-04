import coachesRoutes from './coaches/routes';
import Coaches from '../pages/coaches/Coaches.vue';
import NotFound from '../pages/NotFound.vue';
import guards from '../guards';

const CoachRegistration = () => import('../pages/coaches/CoachRegistration.vue');
const RequestsReceived = () => import('../pages/requests/RequestsReceived.vue');
const UserAuth = () => import('../pages/auth/UserAuth.vue');

const routes = [
  {
    path: '',
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
    beforeEnter: guards.auth.register
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
