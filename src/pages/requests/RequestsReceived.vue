<template>
  <section>
    <base-card>
      <header>
        <h2>
          Requests Received
        </h2>
      </header>
      <ul v-if="hasRequests">
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
</template>

<script>
import { computed } from 'vue';
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
    return {
      receivedRequests,
      hasRequests
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