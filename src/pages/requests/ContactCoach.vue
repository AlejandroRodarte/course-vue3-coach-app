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
    <contact-coach-form @on-submit-form="onSubmitForm"></contact-coach-form>
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue';
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
    const loading = computed(
      function() {
        return store.getters[requestsTypes.GET_LOADING_FLAG];
      }
    );
    const error = computed(
      function() {
        return store.getters[requestsTypes.GET_ERROR];
      }
    );
    async function onSubmitForm(form) {
      const addRequestPayload = {
        form: {
          ...form,
          coachId: route.params.id
        }
      };
      await store.dispatch(requestsTypes.ADD_REQUEST, addRequestPayload);
      if (!error.value) router.replace('/coaches');
    }
    function onBaseDialogClose() {
      store.dispatch(requestsTypes.CLEAR_ERROR);
    }
    onUnmounted(() => {
      store.dispatch(requestsTypes.CLEAR_ERROR);
    });
    return {
      onSubmitForm,
      onBaseDialogClose,
      loading,
      error
    };
  }
}
</script>