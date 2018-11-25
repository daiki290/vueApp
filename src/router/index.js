import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Content from '@/pages/Content'
import ErrorPage from '@/pages/ErrorPage'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
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
          component: HelloWorld,
          beforeEnter: requireAuth
        },
        {
          path: 'content',
          name: 'content',
          component: Content,
          beforeEnter: requireAuth
        },
        { path: '/logout',
          beforeEnter: logout
        },
        {
          path: '/about',
          name: 'About',
          component: About
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
