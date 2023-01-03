const app = Vue.createApp({

    data(){
        return{
            detailsareVisible: false,
            friends: [
                {id: 'mustafa', name: 'Mustafa Şahin', phone:'+90000 000 00 00', email:'contact@mustafasahin.dev'},
                {id: 'ahmet', name: 'Ahmet Şahin', phone:'+9111 111 11 11', email: 'contact@mustafasahin.dev'},
            ]
        }
    },
    methods:{
        toogleDetails(){
            this.detailsareVisible = !this.detailsareVisible;
        }
    }

})

app.component('friend-contact',{
    template: `
        <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toogleDetails(friend.id)"  > {{ detailsareVisible ? 'Hide' : 'Show' }} Show Details</button>
        <ul v-if="detailsareVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
  `,
    data(){
        return{
            detailsareVisible: false,
            friend: {id: 'mustafa', name: 'Mustafa Şahin', phone:'+90000 000 00 00', email:'contact@mustafasahin.dev'},

        }
    },
    methods:{
        toogleDetails(){
            this.detailsareVisible = !this.detailsareVisible;
        }
    }
});

app.mount('#app');