<template>
  <section>
    <base-card>
      <h2>
        Register as a coach now!
      </h2>
      <coach-registration-form></coach-registration-form>
    </base-card>
  </section>
</template>

<script>
import CoachRegistrationForm from '../../components/coaches/CoachRegistrationForm.vue';

export default {
  components: {
    CoachRegistrationForm
  }
}
</script>