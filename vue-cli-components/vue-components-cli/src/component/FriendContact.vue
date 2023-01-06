<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toogleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toogleFavorite">{{}} Toogle Favorite</button>

    <ul v-if="detailsAreVisible" key="friend.id">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAdress }}</li>
    </ul>
    <button @click="$emit('delete',id)" >Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toogle-favorite"],
  // emits:{
  //     'toogle-favorite': function(id){
  //         if(id){
  //             return true;
  //         }else{
  //             console.warn("Id eksik")
  //             return false;
  //         }
  //     }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toogleFavorite() {
      this.$emit("toogle-favorite", this.id);
    },
    deleteFriend(){

    }
  },
};
</script>