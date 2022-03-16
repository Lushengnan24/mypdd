import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../pages/Home/Home';
import Chat from './../pages/Chat/Chat';
import Recommend from './../pages/Recommend/Recommend';
import Search from './../pages/Search/Search';
import Me from './../pages/Me/Me';


import Hot from '../pages/Home/Children/Hot/Hot';
import Box from './../pages/Home/Children/Box';
import Dress from './../pages/Home/Children/Dress';
import Ele from './../pages/Home/Children/Ele';
import Food from './../pages/Home/Children/Food';
import General from './../pages/Home/Children/General';
import Man from './../pages/Home/Children/Man';
import Mbaby from './../pages/Home/Children/Mbaby';
import Shirt from './../pages/Home/Children/Shirt';

Vue.use(VueRouter);

export default new VueRouter({
routes:[
  {
    path:'/home',
    component:Home,
     children:[
      {path: '/home/hot',component:Hot},
      {path: '/home/box', component: Box},
      {path: '/home/dress', component: Dress},
      {path: '/home/ele', component: Ele},
      {path: '/home/food', component: Food},
      {path: '/home/general', component: General},
      {path: '/home/man', component: Man},
      {path: '/home/mbaby', component: Mbaby},
      {path: '/home/shirt', component: Shirt},
      {path:'/home', redirect:'/home/hot'}
     ]
    },
  {
    path:'/chat',
    component:Chat
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/recommend',
    component: Recommend
  },
  {
    path:'/me',
    component:Me
  },
  {
    path:'/',
    redirect:'/home'
  }
]

})
