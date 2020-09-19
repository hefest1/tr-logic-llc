import Vue from 'vue';
import Router from 'vue-router';
import Contacts from './components/Contacts.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Contacts, 
        },
        {
            path: '/details',
            component: () => import('./components/Details.vue')
        }
    ]
})