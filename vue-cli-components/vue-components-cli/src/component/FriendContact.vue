<template>
    <li>
        <h2>{{ name }} {{ friendIsFavorite  ? '(Favorite)' : ''  }}</h2>
        <button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <button @click="toogleFavorite">{{ }} Toogle Favorite</button>

            <ul v-if="detailsAreVisible" key="friend.id">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAdress }}</li>
        </ul>
    </li>
</template>

<script>

export default {
    props: {
        name:{
            type: String,
            required: true
        },
        phoneNumber:{
            type: String,
            required: true
        },
        emailAdress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default:false,
        }
    },
    data(){
        return{
            detailsAreVisible: false,
            friendIsFavorite: this.isFavorite,
        }
    },
    methods: {
        toogleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toogleFavorite(){
            this.friendIsFavorite = !this.friendIsFavorite;
        }
    }
}
</script>