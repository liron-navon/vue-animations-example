import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueScrollReveal from 'vue-scroll-reveal';
import './global.css';

Vue.config.productionTip = false;

Vue.use(VueScrollReveal, {
    duration: 2000,
    scale: 1.2
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');

