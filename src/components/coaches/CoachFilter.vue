<template>
  <base-card>
    <h2>
      Find Your Coach
    </h2>
    <span
      v-for="area in options.areas"
      :key="area.value"
      class="filter-option"
    >
      <input
        type="checkbox"
        :id="area.value"
        :value="area.value"
        v-model="newFilters.areas"
        :checked="newFilters.areas.includes(area.value)"
      />
      <label :for="area.value">
        {{ area.label }}
      </label>
    </span>
  </base-card>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    filters: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    const options = ref({
      areas: [
        {
          value: 'frontend',
          label: 'Frontend'
        },
        {
          value: 'backend',
          label: 'Backend'
        },
        {
          value: 'career',
          label: 'Career'
        }
      ]
    });
    const newFilters = ref({
      ...props.filters,
      areas: [...props.filters.areas]
    });
    watch(() => newFilters, (newFilters) => {
      ctx.emit('update:filters', newFilters.value);
    }, { deep: true });
    return {
      options,
      newFilters
    };
  }  
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>