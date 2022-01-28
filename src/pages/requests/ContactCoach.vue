<template>
  <contact-coach-form @on-submit-form="onSubmitForm"></contact-coach-form>
</template>

<script>
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import * as requestsTypes from '../../store/modules/requests/types';
import ContactCoachForm from '../../components/coaches/ContactCoachForm.vue';

export default {
  components: {
    ContactCoachForm
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    function onSubmitForm(form) {
      const addRequestPayload = {
        form: {
          ...form,
          coachId: route.params.id
        }
      };
      store.dispatch(requestsTypes.ADD_REQUEST, addRequestPayload);
      router.replace('/coaches');
    }
    return { onSubmitForm };
  }
}
</script>