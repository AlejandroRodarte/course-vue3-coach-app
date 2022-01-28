<template>
  <div>
    <base-dialog
      :show="!!error"
      @close="onBaseDialogClose"
    >
      <p>
        {{ error }}
      </p>
    </base-dialog>
    <section>
      <base-card>
        <header>
          <h2>
            Requests Received
          </h2>
        </header>
        <div v-if="loading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :request="request"
          >
          </request-item>
        </ul>
        <h3 v-else>
          You have not received any requests yet!
        </h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { computed, onUnmounted } from 'vue';
import { useStore } from 'vuex';
import * as requestsTypes from '../../store/modules/requests/types';
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    RequestItem
  },
  setup() {
    const store = useStore();
    const receivedRequests = computed(
      function() {
        return store.getters[requestsTypes.GET_REQUESTS];
      }
    );
    const hasRequests = computed(
      function() {
        return store.getters[requestsTypes.HAS_REQUESTS];
      }
    );
    const loading = computed(
      function() {
        return store.getters[requestsTypes.GET_LOADING_FLAG];
      }
    );
    const error = computed(
      function() {
        return store.getters[requestsTypes.GET_ERROR];
      }
    );
    const shouldUpdate = computed(
      function() {
        return store.getters[requestsTypes.SHOULD_UPDATE];
      }
    );
    function onBaseDialogClose() {
      store.dispatch(requestsTypes.CLEAR_ERROR);
    }
    onUnmounted(() => {
      store.dispatch(requestsTypes.CLEAR_ERROR);
    });
    if (!hasRequests.value || shouldUpdate.value) store.dispatch(requestsTypes.SET_REQUESTS);
    return {
      receivedRequests,
      hasRequests,
      loading,
      error,
      onBaseDialogClose
    };
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>