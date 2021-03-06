import { createApp, defineAsyncComponent } from 'vue';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

import router from './routes/router';
import store from './store';
import * as authTypes from './store/modules/auth/types';

const BaseDialog = defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'));

const autoLogin = store.dispatch(authTypes.AUTO_LOGIN);
router.beforeEach((to, from, next) => autoLogin.then(next));

createApp(App)
  .use(router)
  .use(store)
  .component('base-card', BaseCard)
  .component('base-button', BaseButton)
  .component('base-badge', BaseBadge)
  .component('base-spinner', BaseSpinner)
  .component('base-dialog', BaseDialog)
  .mount('#app');
