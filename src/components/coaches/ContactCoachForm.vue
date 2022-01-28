<template>
  <form @submit.prevent="onSubmit">
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.email.touched && !metadata.inputs.email.isValid }"
    >
      <label for="email">
        Your E-Mail
      </label>
      <input
        type="email"
        name="email"
        id="email"
        v-model.trim="form.email"
        @input="onInputChange(['email'])"
      >
      <p v-if="metadata.inputs.email.touched && !metadata.inputs.email.isValid">
        {{ metadata.inputs.email.message }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.message.touched && !metadata.inputs.message.isValid }"
    >
      <label for="message">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        rows="5"
        v-model.trim="form.message"
        @input="onInputChange(['message'])"
      >
      </textarea>
      <p v-if="metadata.inputs.message.touched && !metadata.inputs.message.isValid">
        {{ metadata.inputs.message.message }}
      </p>
    </div>
    <div class="actions">
      <p v-if="!metadata.form.isValid">
        Please fix the above errors and submit again.
      </p>
      <base-button
        type="submit"
        :disabled="!metadata.form.isValid"
      >
        Send Message
      </base-button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import contactCoachFormSpec from '../../util/constants/coaches/contact-coach-form-spec';
import generateFormMetadata from '../../util/forms/validation/generate-form-metadata';
import updateInputMetadata from '../../util/forms/validation/update-input-metadata';
import updateFormMetadata from '../../util/forms/validation/update-form-metadata';

export default {
  emits: ['on-submit-form'],
  setup(_, ctx) {
    const form = ref({
      email: '',
      message: ''
    });
    const metadata = ref(generateFormMetadata(contactCoachFormSpec));
    function onInputChange(path) {
      updateInputMetadata(path, form.value, contactCoachFormSpec, metadata.value);
      updateFormMetadata(contactCoachFormSpec, metadata.value);
    }
    function onSubmit() {
      ctx.emit('on-submit-form', form.value);
    }
    return {
      form,
      metadata,
      onSubmit,
      onInputChange
    };
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>