import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
    children: [
    {
    path: 'yaoyan',
    name: 'yaoyan',
    component: () => import(/* webpackChunkName: "yaoyan" */ '../views/index/components/yaoyan.vue'),
    },
    {
    path: 'itemPrice',
    name: 'itemPrice',
    component: () => import(/* webpackChunkName: "itemPrice" */ '../views/index/components/itemPrice.vue'),
    },
    {
    path: 'dayUseItemPrice',
    name: 'dayUseItemPrice',
    component: () => import(/* webpackChunkName: "dayUseItemPrice" */ '../views/index/components/dayUseItemPrice.vue'),
    },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
