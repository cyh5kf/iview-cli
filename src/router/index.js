import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable */
const Index = resolve => require(['../views/index.vue'], resolve);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index
        }
    ]

});

export default router;