import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Content from '@/pages/Content'
import ErrorPage from '@/pages/ErrorPage'
import Index from '@/pages/Index'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Clock from '@/components/Clock'
import Vote from '@/components/Vote'
import cognito from '@/cognito'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  cognito.isAuthenticated()
    .then(session => {
      next()
    })
    .catch(session => {
      next({
        path: '/home',
        query: { redirect: to.fullPath }
      })
    })
}

const logout = (to, from, next) => {
  cognito.logout()
  next('/home')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      component: Index,
      beforeEnter: requireAuth,
      children: [
        {
          path: '/helloWorld',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          path: '/content',
          name: 'content',
          component: Content
        },
        {
          path: '/clock',
          name: 'clock',
          component: Clock
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
          path: '/vote',
          name: 'Vote',
          component: Vote
        }
      ]
    },
    {
      path: '*',
      name: 'ErrorPage',
      component: ErrorPage
    }
  ]
})
