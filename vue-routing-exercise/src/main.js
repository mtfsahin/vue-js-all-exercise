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
        { path: '/users', components: {default: UsersList, footer:UsersFooter },       
        beforeEnter(to, from, next){
            console.log('users beforeEnter')
            console.log(to, from);
            next()
        }
        },
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition){
       //console.log(to, from, savedPosition)
       if(savedPosition){
        return savedPosition;
       } 
       return { left:0, top:0 };
    }
});

router.beforeEach(function(to, from, next) {
    // Navigation Guard

    //console.log("Global beforeEach")
    //console.log(to, from)
    //if(to.name === 'team-members'){
    //    next();
    //}else{
    //    next({name: 'team-members', params: { teamId: 't2' }});
    //}
    next();
})

const app = createApp(App);

app.use(router);

app.mount('#app');
