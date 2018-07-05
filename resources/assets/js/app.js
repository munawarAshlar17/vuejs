
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import VueRouter from 'vue-router';
import footer from './components/footer';
import sidebar from './components/sidebar';
import header_2 from './components/header_2';
import header from './components/header';
import whole_page from './components/whole_page';
import aboutus from './components/aboutus';

require('./bootstrap');

window.Vue = require('vue');


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('header-component', require('./components/header'));
Vue.component('footer-component', require('./components/footer'));
Vue.component('header_2-component', require('./components/header_2'));
Vue.component('sidebar-component', require('./components/sidebar'));
Vue.component('whole_page-component', require('./components/whole_page'));
Vue.component('aboutus-component', require('./components/aboutus'));
Vue.use(VueRouter);

const routes =[
    {path:'/aboutus', component: aboutus},
    {path:'/', component: whole_page},
];

const router= new VueRouter({
    routes: routes,
    mode:'history',
});

const app = new Vue({
    el: '#app',
    router,
});

var app1 = new Vue({

    el:"#app1",
    data:{
        todos:[
            {name:'munawar'},
            {age:'12'},
            {name:'gohar'},
            {age:'23'},

        ],
        message:'hey this my new applictaion using laravel',
        dist:'hey you there let me speak',



    },
    methods:{
        reversedata: function()
        {
            this.message= this.message.split('').reverse().join('')
        }
    },






});