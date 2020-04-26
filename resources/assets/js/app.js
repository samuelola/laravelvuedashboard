
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import moment from 'moment';

import { Form, HasError, AlertError } from 'vform'

window.Form = Form;

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'

Vue.use(VueRouter);

let routes = [
  { path: '/dashboard', component:require('./components/DashboardComponent.vue')},
  { path: '/profile', component:require('./components/ProfileComponent.vue')},
  { path: '/user', component:require('./components/UsersComponent.vue')}
]


const router = new VueRouter({
  mode: 'history', 	
  routes // short for `routes: routes`
})



Vue.filter('myDate',function(created){

	return moment(created).startOf('hour').fromNow();
});



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app',
    router
});
