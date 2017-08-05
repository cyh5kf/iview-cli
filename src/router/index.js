import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* eslint-disable */
const Login = resolve => require(['views/login/login'], resolve);
const App = resolve => require(['views/App/App'], resolve);
const Home = resolve => require(['views/home/home'], resolve);
const Profile = resolve => require(['views/profile/profile'], resolve);
const Posts = resolve => require(['views/posts/posts'], resolve);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '*',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login,
            beforeEnter: (to, from, next) => {
                next()
            }
        },
        {
            path: '/main',
            component: App,
            children: [
                {
                    path: 'home',
                    component: Home
                }
            ]
        },
        {
            path: '/main',
            component: App,
            children: [
                {
                    path: 'profile',
                    component: Profile
                }
            ]
        },
        {
            path: '/main',
            component: App,
            children: [
                {
                    path: 'posts',
                    component: Posts
                }
            ]
        },
        {
            path: '/main/*',
            redirect: '/main/home'
        }
    ]
});

export default router;