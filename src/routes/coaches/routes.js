import coachesIdRoutes from './id/routes';

const routes = [
    {
        path: '',
        component: null
    },
    {
        path: ':id',
        component: null,
        children: coachesIdRoutes
    }
];

export default routes;
