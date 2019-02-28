import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from './views/Page1/Page1'
import Page2 from './views/Page2/Page2'

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Page1 },
    { path: '/home', component: Page1 },
    { path: '/profile', component: Page2 }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
