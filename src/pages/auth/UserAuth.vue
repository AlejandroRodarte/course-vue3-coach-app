<template>
  <div>
    <base-dialog
      :show="!!error"
      @close="onBaseDialogClose"
    >
      {{ error }}
    </base-dialog>
    <user-auth-form
      v-if="!loading"
      @on-submit-form="onSubmitForm"
    >
    </user-auth-form>
    <base-spinner v-else></base-spinner>
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as authTypes from '../../store/modules/auth/types';
import UserAuthForm from '../../components/auth/UserAuthForm.vue';

export default {
  components: {
    UserAuthForm
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = computed(
      function() {
        return store.getters[authTypes.GET_LOADING_FLAG];
      }
    );
    const error = computed(
      function() {
        return store.getters[authTypes.GET_ERROR];
      }
    );
    async function onSubmitForm(payload) {
      const mapModeToAction = {
        signin: authTypes.LOGIN,
        signup: authTypes.SIGNUP
      };
      await store.dispatch(mapModeToAction[payload.mode], payload.form);
      if (!error.value) router.replace('/coaches');
    }
    function onBaseDialogClose() {
      store.dispatch(authTypes.CLEAR_ERROR);
    }
    onUnmounted(() => {
      store.dispatch(authTypes.CLEAR_ERROR);
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