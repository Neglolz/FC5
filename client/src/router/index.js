import Vue from "vue";
import Router from "vue-router";
//Routes
import Hello from "@/components/Hello";
import Field from "@/components/Field";
import Register from "@/pages/Register";


Vue.use(Router)

const checkAuthentication = (to, from, next) => {
  const token = window.localStorage.getItem('fc5.token')
  let profile = window.localStorage.getItem('fc5.profile')
  try {
    profile = JSON.parse(profile)
  } catch (e) {
    profile = null
  }
  if (profile && to.path.substring(0, 6) === '/admin' && profile.role !== 2) {
    next({ name: 'login' })
  } else {
    next(token ? true : { name: 'login' })
  }
}

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
