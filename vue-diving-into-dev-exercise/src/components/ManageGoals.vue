<template>
  <div>
    <h2>ManageGoals</h2>
    <input type="text" ref="goal"/>
    <button @click="setGoal"> Set Goal</button>
    <error-alert v-if="inputIsValid">
        <h2>Input is Invalid</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsValid: false
        }
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === ''){
               this.inputIsValid = true
            }
        },
        confirmError(){
            this.inputIsValid = false;
        }
    }
}
</script>