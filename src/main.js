import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import Home from './views/Home.vue';
import SingleArticle from './views/singleArticle.vue';


Vue.use(VueRouter);

Vue.config.productionTip = false;


const routes = [
	
	{path: '/', component: Home},
	{path: '/article/:id', component: SingleArticle},
];

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
