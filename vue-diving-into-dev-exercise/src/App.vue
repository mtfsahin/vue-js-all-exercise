<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["anotherProp"] }}</p>
    </course-goals>
  </div>
</template>

<script>
import CourseGoals from './components/CourseGoals.vue';
export default {
  components: { CourseGoals },
  data() {
    return {
      activeUser: {
        name: 'Mustafa şahin',
        description: 'Web site admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>