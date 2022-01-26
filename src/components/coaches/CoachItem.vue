<template>
  <li>
    <h3>
      {{ fullName }}
    </h3>
    <h4>
      ${{ coach.hourlyRate }}/hour
    </h4>
    <div>
      <span 
        v-for="area in coach.areas"
        :key="area"
      >
        <base-badge
          :type="area"
          :title="area"
        >
          {{ area }}
        </base-badge>
      </span>
    </div>
    <div class="actions">
      <base-button
        :to="links.contact.value"
        link
        mode="outline"
      >
        Contact
      </base-button>
      <base-button
        :to="links.details.value"
        link
      >
        View Details
      </base-button>
    </div>
  </li>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: {
    coach: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const fullName = computed(
      function() {
        return `${ props.coach.firstName } ${ props.coach.lastName }`;
      }
    );
    const contact = computed(
      function() {
        return `${ route.path }/${ props.coach.id }/contact`;
      }
    );
    const details = computed(
      function() {
        return `${ route.path }/${ props.coach.id }`;
      }
    );
    return {
      fullName,
      links: {
        contact,
        details
      }
    };
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>