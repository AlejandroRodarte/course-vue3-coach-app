import { defineAsyncComponent } from 'vue';
import coachesIdRoutes from './id/routes';
import CoachesList from '../../pages/coaches/CoachesList.vue';

const CoachDetail = defineAsyncComponent(() => import('../../pages/coaches/CoachDetail.vue'));

const routes = [
  {
    path: '',
    component: CoachesList
  },
  {
    path: ':id',
    component: CoachDetail,
    props: true,
    children: coachesIdRoutes
  }
];

export default routes;
