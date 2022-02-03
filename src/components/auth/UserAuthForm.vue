<template>
  <base-card>
    <form @submit.prevent="onSubmit">
      <div
        class="form-control"
        :class="{ invalid: metadata.inputs.email.touched && !metadata.inputs.email.isValid }"
      >
        <label for="email">
          Email
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
        :class="{ invalid: metadata.inputs.password.touched && !metadata.inputs.password.isValid }"
      >
        <label for="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model.trim="form.password"
          @input="onInputChange(['password'])"
        >
        <p v-if="metadata.inputs.password.touched && !metadata.inputs.password.isValid">
          {{ metadata.inputs.password.message }}
        </p>
      </div>
      <base-button :disabled="!metadata.form.isValid">
        {{ currentMode === 'signin' ? 'Login' : 'Signup' }}
      </base-button>
      <base-button
        type="button"
        mode="flat"
        @click="onModeToggle"
      >
        {{ currentMode === 'signin' ? 'Signup instead' : 'Login instead' }}
      </base-button>
    </form>
  </base-card>
</template>

<script>
import { ref } from 'vue';
import userAuthFormSpec from '../../util/constants/coaches/user-auth-form-spec';
import generateFormMetadata from '../../util/forms/validation/generate-form-metadata';
import updateInputMetadata from '../../util/forms/validation/update-input-metadata';
import updateFormMetadata from '../../util/forms/validation/update-form-metadata';

export default {
  emits: ['on-submit-form'],
  props: {
    mode: {
      type: String,
      required: false,
      default: 'signin'
    }
  },
  setup(props, ctx) {
    const currentMode = ref(props.mode);
    const form = ref({
      email: '',
      password: ''
    });
    const metadata = ref(generateFormMetadata(userAuthFormSpec));
    function onInputChange(path) {
      updateInputMetadata(path, form.value, userAuthFormSpec, metadata.value);
      updateFormMetadata(userAuthFormSpec, metadata.value);
    }
    function onSubmit() {
      ctx.emit('on-submit-form', { form: form.value, mode: currentMode.value });
    }
    function onModeToggle() {
      if (currentMode.value === 'signin') currentMode.value = 'signup';
      else currentMode.value = 'signin';
    }
    return {
      currentMode,
      form,
      metadata,
      onModeToggle,
      onInputChange,
      onSubmit
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