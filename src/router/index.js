import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/Home'
import Quiz from '../components/Quiz'
import Categories from '../components/Categories'
import Result from '../components/Result'
import AboutUs from '../components/AboutUs'

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories,
    },
    {
      path: '/quiz/:slug',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    }
  ]
});