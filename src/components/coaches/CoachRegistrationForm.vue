<template>
  <form @submit.prevent="onSubmit">
    <div 
      class="form-control"
      :class="{ invalid: metadata.inputs.names.inputs.first.touched && !metadata.inputs.names.inputs.first.isValid }"
    >
      <label for="first-name">
        First Name
      </label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        v-model.trim="form.names.first"
        @input="onInputChange(['names', 'first'])"
      >
      <p v-if="metadata.inputs.names.inputs.first.touched && !metadata.inputs.names.inputs.first.isValid">
        {{ metadata.inputs.names.inputs.first.message }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.names.inputs.last.touched && !metadata.inputs.names.inputs.last.isValid }"  
    >
      <label for="last-name">
        Last Name
      </label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        v-model.trim="form.names.last"
        @input="onInputChange(['names', 'last'])"
      >
      <p v-if="metadata.inputs.names.inputs.last.touched && !metadata.inputs.names.inputs.last.isValid">
        {{ metadata.inputs.names.inputs.last.message }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.description.touched && !metadata.inputs.description.isValid }"  
    >
      <label for="description">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="form.description"
        @input="onInputChange(['description'])"
      >
      </textarea>
      <p v-if="metadata.inputs.description.touched && !metadata.inputs.description.isValid">
        {{ metadata.inputs.description.message }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.rate.touched && !metadata.inputs.rate.isValid }" 
    >
      <label for="rate">
        Hourly Rate
      </label>
      <input
        type="number"
        name="rate"
        id="rate"
        v-model.number="form.rate"
        @input="onInputChange(['rate'])"
      >
      <p v-if="metadata.inputs.rate.touched && !metadata.inputs.rate.isValid">
        {{ metadata.inputs.rate.message }}
      </p>
    </div>
    <div
      class="form-control"
      :class="{ invalid: metadata.inputs.areas.touched && !metadata.inputs.areas.isValid }" 
    >
      <h3>
        Areas of expertise
      </h3>
      <div
        v-for="area in areas"
        :key="area.value"
      >
        <input
          type="checkbox"
          :name="area.value"
          :id="area.value"
          :value="area.value"
          v-model.lazy="form.areas"
          @change="onInputChange(['areas'])"
        >
        <label :for="area.value">
          {{ area.label }}
        </label>
      </div>
      <p v-if="metadata.inputs.areas.touched && !metadata.inputs.areas.isValid">
        {{ metadata.inputs.areas.message }}
      </p>
    </div>
    <p v-if="!metadata.form.isValid">
      Please fix the above errors and submit again.
    </p>
    <base-button
      type="submit"
      :disabled="!metadata.form.isValid"
    >
      Register
    </base-button>
  </form>
</template>

<script>
import { ref } from 'vue';
import coachRegistrationFormAreas from '../../util/constants/coaches/coach-registration-form-areas';
import coachRegistrationFormSpec from '../../util/constants/coaches/coach-registration-form-spec';
import generateFormMetadata from '../../util/forms/validation/generate-form-metadata';
import updateInputMetadata from '../../util/forms/validation/update-input-metadata';
import updateFormMetadata from '../../util/forms/validation/update-form-metadata';

export default {
  emits: ['on-submit-form'],
  setup(_, ctx) {
    const areas = ref(coachRegistrationFormAreas);
    const form = ref({
      names: {
        first: '',
        last: ''
      },
      description: '',
      rate: 0,
      areas: []
    });
    const metadata = ref(generateFormMetadata(coachRegistrationFormSpec));
    function onInputChange(path) {
      updateInputMetadata(path, form.value, coachRegistrationFormSpec, metadata.value);
      updateFormMetadata(coachRegistrationFormSpec, metadata.value);
    }
    function onSubmit() {
      ctx.emit('on-submit-form', form.value);
    }
    return {
      areas,
      form,
      metadata,
      onSubmit,
      onInputChange
    };
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>