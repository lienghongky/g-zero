import Vue from "vue";
import VueRouter from "vue-router";
import layout from '../views/layout'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/index',
    component: layout,
    meta: {title:'Home', icon: 'ic_linkedin'},
    children: [
      {
        path:'index',
        name:'Home-Index',
        component:() => import('../views/pages/home')
      },
      {
        path:'service',
        name:'Service',
        component:() => import('../views/pages/service')
      },
      {
        path:'product',
        name:'Product',
        component:() => import('../views/pages/product')
      },
      {
        path:'more',
        name:'More',
        component:() => import('../views/pages/more')
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: {title:'About', icon: 'face'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: layout,
    children: [{
      path: '',
      name: 'About-Index',
      component: () =>import(/* webpackChunkName: "about" */ "../views/pages/about")
    }]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
