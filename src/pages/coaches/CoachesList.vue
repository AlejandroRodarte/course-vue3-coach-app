<template>
  <section>
    Filter
  </section>
  <section>
    <div class="controls">
      <button>
        Refresh
      </button>
      <router-link to="/register">
        Register as a coach
      </router-link>
    </div>
    <ul v-if="hasCoaches">
      <li
        v-for="coach in filteredCoaches"
        :key="coach.id"
      >
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>
      No coaches found
    </h3>
  </section>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import * as coachesTypes from '../../store/modules/coaches/types';

export default {
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