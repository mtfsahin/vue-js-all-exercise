<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <manage-goals v-if="selectedComponent === 'active-goals'"></manage-goals>
    <active-goals v-if="selectedComponent === 'manage-goals'"></active-goals> -->
    <component :is="selectedComponent"></component>
  </div>
</template>

<script>
export default {
  
  components: {  },
  data() {
    return {
      selectedComponent:'active-goals',
      activeUser: {
        name: 'Mustafa şahin',
        description: 'Web site admin',
        role: 'admin',
      },
    };
  },
  methods:{
        setSelectedComponent(cmp){
          this.selectedComponent  = cmp;
        }
      }
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