<template>
  <section>Filter</section>
  <section>
    <div>
      <button>Refresh</button>
      <router-link to="/register">Register as Teacher</router-link>
    </div>
    <ul v-if="hasTeachers">
      <li v-for="teacher in filteredTeachers" :key="teacher.id">
        {{ teacher.firstName + ' ' + teacher.lastName }}
      </li>
    </ul>
    <h3 v-else>No teachers found.</h3>
  </section>
</template>

<script>
export default {
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
