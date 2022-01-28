<template>
  <section>
    <base-card>
      <h2>
        Register as a coach now!
      </h2>
      <coach-registration-form @on-submit-form="onSubmitForm"></coach-registration-form>
    </base-card>
  </section>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as coachesTypes from '../../store/modules/coaches/types';
import CoachRegistrationForm from '../../components/coaches/CoachRegistrationForm.vue';

export default {
  components: {
    CoachRegistrationForm
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    async function onSubmitForm(form) {
      await store.dispatch(coachesTypes.ADD_COACH, { form });
      router.replace('/coaches');
    }
    return { onSubmitForm };
  }
}
</script>