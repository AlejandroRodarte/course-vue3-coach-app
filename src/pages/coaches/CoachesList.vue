<template>
  <section>
    Filter
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">
          Refresh
        </base-button>
        <base-button
          link
          to="/register"
        >
          Register as a coach
        </base-button>
      </div>
      <ul v-if="hasCoaches">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :coach="coach"
        >
        </coach-item>
      </ul>
      <h3 v-else>
        No coaches found
      </h3>
    </base-card>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import * as coachesTypes from '../../store/modules/coaches/types';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: {
    CoachItem
  },
  setup() {
    const store = useStore();
    const filteredCoaches = computed(
      function() {
        return store.getters[coachesTypes.GET_COACHES];
      }
    );
    const hasCoaches = computed(
      function() {
        return store.getters[coachesTypes.HAS_COACHES];
      }
    );

    return {
      filteredCoaches,
      hasCoaches
    };
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>