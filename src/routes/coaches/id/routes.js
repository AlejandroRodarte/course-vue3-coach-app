import { defineAsyncComponent } from 'vue';

const ContactCoach = defineAsyncComponent(() => import('../../../pages/requests/ContactCoach.vue'));

const routes = [
  {
    path: 'contact',
    component: ContactCoach
  }
];

export default routes;
