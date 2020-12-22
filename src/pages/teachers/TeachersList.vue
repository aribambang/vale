<template>
  <section>Filter</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Teacher</base-button>
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

export default {
  components: {
    TeacherItem,
  },
  computed: {
    filteredTeachers() {
      return this.$store.getters['teachers/teachers'];
    },
    hasTeachers() {
      return this.$store.getters['teachers/hasTeachers'];
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
