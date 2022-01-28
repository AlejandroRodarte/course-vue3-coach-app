<template>
  <user-auth-form @on-submit-form="onSubmitForm"></user-auth-form>
</template>

<script>
import UserAuthForm from '../../components/auth/UserAuthForm.vue';

export default {
  components: {
    UserAuthForm
  },
  setup() {
    function onSubmitForm(form) {
      console.log(form);
    }
    return { onSubmitForm };
  }
}
</script>