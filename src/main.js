import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Personal from './views/personal.vue'
import Service from './views/service.vue'
import Rank from './views/rank.vue'

Vue.use(VueResource);

Vue.use(VueRouter);

var router = new VueRouter({
    hashbang: true
});

router.map({
    '/': {
        component: Personal
    },
    '/personal': {
        component: Personal
    },
    '/service': {
        component: Service
    },
    '/rank': {
        component: Rank
    }
});

router.start(App, '#app');
