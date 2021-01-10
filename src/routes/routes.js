import coachesRoutes from './coaches/routes';

const routes = [
    {
        path: '/',
        redirect: '/coaches'
    },
    {
        path: '/coaches',
        component: null,
        children: coachesRoutes
    },
    {
        path: '/register',
        component: null
    },
    {
        path: '/requests',
        component: null
    },
    {
        path: '/:notFound(.*)',
        component: null
    }
];

export default routes;
