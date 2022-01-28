<template>
  <div>
    <base-dialog
      :show="!!error"
      @close="onBaseDialogClose"
    >
      <p>
        {{ error }}
      </p>
    </base-dialog>
    <section>
      <base-card>
        <h2>
          Register as a coach now!
        </h2>
        <coach-registration-form @on-submit-form="onSubmitForm"></coach-registration-form>
      </base-card>
    </section>
  </div>
</template>

<script>
import { computed } from 'vue';
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
    const loading = computed(
      function() {
        return store.getters[coachesTypes.GET_LOADING_FLAG];
      }
    );
    const error = computed(
      function() {
        return store.getters[coachesTypes.GET_ERROR];
      }
    );
    async function onSubmitForm(form) {
      await store.dispatch(coachesTypes.ADD_COACH, { form });
      if (!error.value) router.replace('/coaches');
    }
    function onBaseDialogClose() {
      store.dispatch(coachesTypes.CLEAR_ERROR);
    }
    return {
      onSubmitForm,
      onBaseDialogClose,
      loading,
      error
    };
  }
}
</script>