<template>
  <contact-coach-form @on-submit-form="onSubmitForm"></contact-coach-form>
</template>

<script>
import ContactCoachForm from '../../components/coaches/ContactCoachForm.vue';

export default {
  components: {
    ContactCoachForm
  },
  setup() {
    function onSubmitForm(form) {
      console.log(form);
    }
    return { onSubmitForm };
  }
}
</script>