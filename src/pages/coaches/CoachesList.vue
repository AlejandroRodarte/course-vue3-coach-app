<template>
  <base-dialog
    :show="!!error"
    @close="onBaseDialogClose"
  >
    <p>
      {{ error }}
    </p>
  </base-dialog>
  <section>
    <coach-filter v-model:filters="coachFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button
          mode="outline"
          @click="onRefresh"
        >
          Refresh
        </base-button>
        <base-button
          v-if="!isUserOnCoachList && !loading"
          link
          to="/register"
        >
          Register as a coach
        </base-button>
      </div>
      <div v-if="loading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
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
import { ref, computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import * as coachesTypes from '../../store/modules/coaches/types';
import coachesListFilters from '../../util/constants/coaches/coaches-list-filters';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },
  setup() {
    const coachFilters = ref(coachesListFilters);
    const store = useStore();
    const filteredCoaches = computed(
      function() {
        return store.getters[coachesTypes.GET_COACHES].filter((coach) => {
          for (const area of coachFilters.value.areas) {
            if (coach.areas.includes(area)) return true;
          }
          return false;
        });
      }
    );
    const isUserOnCoachList = computed(
      function() {
        return store.getters[coachesTypes.IS_USER_ON_COACH_LIST];
      }
    );
    const hasCoaches = computed(
      function() {
        return store.getters[coachesTypes.HAS_COACHES];
      }
    );
    const loading = computed(
      function() {
        return store.getters[coachesTypes.GET_LOADING_FLAG];
      }
    );
    const error = computed(
      function() {
        return store.getters[coachesTypes.GET_ERROR];
      }
    );
    const shouldUpdate = computed(
      function() {
        return store.getters[coachesTypes.SHOULD_UPDATE];
      }
    );
    function onRefresh() {
      store.dispatch(coachesTypes.SET_COACHES);
    }
    function onBaseDialogClose() {
      store.dispatch(coachesTypes.CLEAR_ERROR);
    }
    if (!hasCoaches.value || shouldUpdate.value) store.dispatch(coachesTypes.SET_COACHES);
    onUnmounted(() => {
      store.dispatch(coachesTypes.CLEAR_ERROR);
    });
    return {
      filteredCoaches,
      hasCoaches,
      coachFilters,
      isUserOnCoachList,
      loading,
      error,
      onRefresh,
      onBaseDialogClose
    };
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>