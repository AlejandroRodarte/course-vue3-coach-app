import coachesRoutes from './coaches/routes';

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
