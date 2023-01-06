import { createApp } from 'vue'
import App from '../src/App.vue'
import FriendContact from './component/FriendContact.vue'
import NewFriend from './component/NewFriend.vue'
const app = createApp(App)

app.component('friend-contact',FriendContact)
app.component('new-friend',NewFriend)


app.mount('#app')
