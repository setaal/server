import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Gonggao from '../views/Gonggao.vue';
import Qionglanzhb from '../views/Qionglanzhb.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/gonggao', name: 'Gonggao', component: Gonggao },
  { path: '/qionglanzhb', name: 'Qionglanzhb', component: Qionglanzhb }
];

const router = createRouter({ 
  history: createWebHistory(), 
  routes 
});

 export default router;