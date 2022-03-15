import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../pages/Home/Home';
import Chat from './../pages/Chat/Chat';
import Recommend from './../pages/Recommend/Recommend'
import Search from './../pages/Search/Search'
import Me from './../pages/Me/Me'

Vue.use(VueRouter);

export default new VueRouter({
routes:[
  {
    path:'/home',
    component:Home
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
    redirect:Home
  }
]

})
