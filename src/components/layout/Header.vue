<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">
          Find a coach
        </router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/coaches">
            All coaches
          </router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/requests">
            Requests
          </router-link>
        </li>
        <li v-else>
          <router-link to="/auth">
            Login
          </router-link>
        </li>
        <li v-if="isAuthenticated">
          <base-button @click="onLogout">
            Logout
          </base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as authTypes from '../../store/modules/auth/types';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuthenticated = computed(
      function() {
        return store.getters[authTypes.IS_AUTHENTICATED];
      }
    );
    function onLogout() {
      store.dispatch(authTypes.LOGOUT);
      router.replace('/coaches');
    }
    return {
      isAuthenticated,
      onLogout
    };
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
