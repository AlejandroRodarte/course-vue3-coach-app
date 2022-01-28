<template>
  <div>
    <section>
      <base-card>
        <h2>
          {{ fullName }}
        </h2>
        <h3>
          ${{ coach.hourlyRate }}/hour
        </h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>
            Interested? Reach out now!
          </h2>
          <base-button
            link
            :to="links.contact.value"
          >
            Contact
          </base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in coach.areas"
          :key="area"
          :type="area"
          :title="area"
        >
        </base-badge>
        <p>
          {{ coach.description }}
        </p>
      </base-card>
    </section>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import * as coachesTypes from '../../store/modules/coaches/types';

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const coach = ref();
    store.dispatch(coachesTypes.SELECT_COACH_ID, { selectedCoachId: props.id });
    coach.value = store.getters[coachesTypes.GET_SELECTED_COACH];
    const fullName = computed(
      function() {
        return `${ coach.value.firstName } ${ coach.value.lastName }`
      }
    );
    const contact = computed(
      function() {
        return `/coaches/${ props.id }/contact`;
      }
    )
    return {
      coach,
      fullName,
      links: {
        contact
      }
    };
  }
}
</script>