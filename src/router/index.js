
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from '@/router/routes';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history', // 使用 HTML5 history 模式
  base: process.env.BASE_URL,
  routes
});

export default router;
