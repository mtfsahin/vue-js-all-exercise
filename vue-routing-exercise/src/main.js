import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        //alias da kullanılabilir
        {
            path: '/teams',name:'teams', component: TeamsList, children: [
                { path: '/teams/:teamId', name:'team-members', component: TeamMembers, props: true },
            ]
        },
        { path: '/users', component: UsersList },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
});

const app = createApp(App);

app.use(router);

app.mount('#app');
