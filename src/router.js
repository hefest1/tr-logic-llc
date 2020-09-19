import Vue from 'vue';
import Router from 'vue-router';
import Contacts from './components/Contacts.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: 'tr-logic-llc/',
            component: Contacts, 
        },
        {
            path: 'tr-logic-llc/details',
            component: () => import('./components/Details.vue')
        }
    ]
})