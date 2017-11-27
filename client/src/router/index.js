import Vue from "vue";
import Router from "vue-router";
//Routes
import Hello from "@/components/Hello";
import Field from "@/components/Field";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/game',
      name: 'Game',
      component: Field
    }
  ]
})
