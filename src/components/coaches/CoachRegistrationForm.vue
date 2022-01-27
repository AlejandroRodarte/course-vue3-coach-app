<template>
  <form @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="first-name">
        First Name
      </label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        v-model.trim="form.names.first"
      >
    </div>
    <div class="form-control">
      <label for="last-name">
        Last Name
      </label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        v-model.trim="form.names.last"
      >
    </div>
    <div class="form-control">
      <label for="description">
        Description
      </label>
      <textarea
        name="description"
        id="description"
        rows="5"
        v-model.trim="form.description"
      >
      </textarea>
    </div>
    <div class="form-control">
      <label for="rate">
        Hourly Rate
      </label>
      <input
        type="number"
        name="rate"
        id="rate"
        v-model.number="form.rate"
      >
    </div>
    <div class="form-control">
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
          v-model="form.areas"
        >
        <label :for="area.value">
          {{ area.label }}
        </label>
      </div>
    </div>
    <base-button type="submit">
      Register
    </base-button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const areas = ref([
      {
        value: 'frontend',
        label: 'Frontend Development'
      },
      {
        value: 'backend',
        label: 'Backend Development'
      },
      {
        value: 'career',
        label: 'Career Advisory'
      }
    ]);
    const form = ref({
      names: {
        first: '',
        last: ''
      },
      description: '',
      rate: 0,
      areas: []
    });
    function onSubmit() {
      console.log(form.value);
    }
    return {
      areas,
      form,
      onSubmit
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