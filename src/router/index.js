import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Index from '@/components/Index'
import SignUp from '@/components/SignUp'
import Confirm from '@/components/Confirm'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Split from '@/components/Split'
import cognito from '@/cognito'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  cognito.isAuthenticated()
    .then(session => {
      next()
    })
    .catch(session => {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    })
}

const logout = (to, from, next) => {
  cognito.logout()
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          path: '/home',
          name: 'Home',
          component: Home,
          beforeEnter: requireAuth
        },
        {
          path: '/login',
          name: 'Login',
          component: Login
        },
        {
          path: '/singup',
          name: 'SignUp',
          component: SignUp
        },
        {
          path: '/confirm',
          name: 'Confirm',
          component: Confirm
        },
        { path: '/logout',
          beforeEnter: logout
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/split',
          name: 'Split',
          component: Split
        }
      ]
    }
  ]
})
