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

app.mount('#app')