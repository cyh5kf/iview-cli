import Vue from 'vue';
import iView from 'iview';
import router from './router/index';
import Vuex from 'vuex';
import App from './app.vue';
import './common/style/base.less';
import 'iview/dist/styles/iview.css';

Vue.use(Vuex);
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});