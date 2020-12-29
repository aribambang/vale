<template>
  <section>
    <teacher-filter @change-filter="setFilters"></teacher-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isTeacher" link to="/register"
          >Register as Teacher</base-button
        >
      </div>
      <ul v-if="hasTeachers">
        <teacher-item
          v-for="teacher in filteredTeachers"
          :key="teacher.id"
          :id="teacher.id"
          :first-name="teacher.firstName"
          :last-name="teacher.lastName"
          :rate="teacher.hourlyRate"
          :areas="teacher.areas"
        ></teacher-item>
      </ul>
      <h3 v-else>No teachers found.</h3></base-card
    >
  </section>
</template>

<script>
import TeacherItem from '../../components/teachers/TeacherItem';
import TeacherFilter from '../../components/teachers/TeacherFilter';

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  components: {
    TeacherItem,
    TeacherFilter,
  },
  computed: {
    isTeacher() {
      return this.$store.getters['teachers/isTeacher'];
    },
    filteredTeachers() {
      const teachers = this.$store.getters['teachers/teachers'];
      return teachers.filter((teacher) => {
        if (this.activeFilters.frontend && teacher.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && teacher.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && teacher.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasTeachers() {
      return this.$store.getters['teachers/hasTeachers'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
