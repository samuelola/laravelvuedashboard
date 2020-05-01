
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import moment from 'moment';

import Swal from 'sweetalert2';



window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.Toast = Toast;


// const swalWithBootstrapButtons = Swal.mixin({
//   customClass: {
//     confirmButton: 'btn btn-success',
//     cancelButton: 'btn btn-danger'
//   },
//   buttonsStyling: false
// })

// window.swalWithBootstrapButtons = swalWithBootstrapButtons;

//this is an end to sweet alert

import VueProgressBar from 'vue-progressbar'


Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '3px'
})

import { Form, HasError, AlertError } from 'vform';

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

	return moment(created).format('MMMM Do YYYY');
});


let Fire = new Vue();

window.Fire = Fire;

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
