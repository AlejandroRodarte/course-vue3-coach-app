import coachesIdRoutes from './id/routes';
import CoachesList from '../../pages/coaches/CoachesList.vue';
import CoachDetail from '../../pages/coaches/CoachDetail.vue';

const routes = [
    {
        path: '',
        component: CoachesList
    },
    {
        path: ':id',
        component: CoachDetail,
        children: coachesIdRoutes
    }
];

export default routes;
