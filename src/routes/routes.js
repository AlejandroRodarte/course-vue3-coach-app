import coachesRoutes from './coaches/routes';
import UserAuth from '../pages/auth/UserAuth.vue';
import Coaches from '../pages/coaches/Coaches.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import RequestsReceived from '../pages/requests/RequestsReceived.vue';
import NotFound from '../pages/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches'
  },
  {
    path: '/auth',
    component: UserAuth
  },
  {
    path: '/coaches',
    component: Coaches,
    children: coachesRoutes
  },
  {
    path: '/register',
    component: CoachRegistration
  },
  {
    path: '/requests',
    component: RequestsReceived
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
];

export default routes;
