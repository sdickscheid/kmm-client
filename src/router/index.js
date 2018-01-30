import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// import Dummy from '@/components/Dummy'
import Dashboard from '@/components/Dashboard'
import ProjectList from '@/components/ProjectList'
import ContactList from '@/components/ContactList'
import OnLoad from '@/components/OnLoad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'OnLoad',
          component: OnLoad
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/dashboard/project-mgmt',
          name: 'ProjectList',
          component: ProjectList
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/dashboard/contact-mgmt',
          name: 'ContactList',
          component: ContactList
        }
      ]
    }
  ]
})
