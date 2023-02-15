import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue'
import UsersList from './components/users/UsersList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

const router = createRouter({
    history: createWebHashHistory(),
   
    routes: [
        { path: '/', redirect: '/teams' },
        //alias da kullanılabilir
        {
            path: '/teams',name:'teams',
            components: {default: TeamsList, footer:TeamsFooter },
            children: [
                { path: '/teams/:teamId', name:'team-members', component: TeamMembers, props: true },
            ]
        },
        { path: '/users', components: {default: UsersList, footer:UsersFooter }},
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition){
       console.log(to, from, savedPosition)
       if(savedPosition){
        return savedPosition;
       } 
       return { left:0, top:0 };
    }
});

const app = createApp(App);

app.use(router);

app.mount('#app');
