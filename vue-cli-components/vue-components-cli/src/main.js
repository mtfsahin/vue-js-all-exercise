import { createApp } from 'vue'
import App from '../src/App.vue'
import FriendContact from './component/FriendContact.vue'

const app = createApp(App)

app.component('friend-contact',FriendContact)

app.mount('#app')
