import Vue from "vue";
import VueRouter from "vue-router";
import layout from /* webpackChunkName: "layout" */ '@/views/layout';
import infoLayout from /* webpackChunkName: "subLayout" */ '@/views/layout/infoLayout';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect: '/info',
    component:layout,
    children: [
      {
        path: "info",
        name: "Home",
        redirect: '/info/index',
        component: infoLayout,
        meta: {title:'Home', icon: 'ic_linkedin'},
        children: [
          {
            path:'index',
            name:'Home-Index',
            component:() => import(/* webpackChunkName: "home" */ '../views/pages/info/home')
          },
          {
            path:'service',
            name:'Service',
            component:() => import(/* webpackChunkName: "service" */'../views/pages/info/service')
          },
          {
            path:'product',
            name:'Product',
            component:() => import(/* webpackChunkName: "product" */'../views/pages/info/product')
          },
          {
            path:'more',
            name:'More',
            component:() => import(/* webpackChunkName: "more" */'../views/pages/info/more')
          },
          {
            path:'aboutme',
            name:'About-Me',
            component:() => import(/* webpackChunkName: "more" */'../views/pages/info/about')
          }
        ]
      },
    ]
  },
  {
    path: "/about",
    // name: "About",
    meta: {title:'About', icon: 'face'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: layout,
    children: [{
      path: '',
      name: 'About-Index',
      component: () =>import(/* webpackChunkName: "about" */ "../views/pages/info/about")
    }]
  },
  {
    path: '*',
    redirect: '/about'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
