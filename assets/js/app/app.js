import '../../css/app/app.scss';

import Vue from 'vue';

const Lazy = () => import('./lazy');
const Welcome = () => import('./components/Welcome.vue');

if (window.page === 'index') {
    Vue.component('welcome', (resolve) => {
        Welcome().then(module => resolve(module));
    });
}

if (window.page === 'lazy-load') {
    Lazy();
}

const app = new Vue({
    el: '#app',
});