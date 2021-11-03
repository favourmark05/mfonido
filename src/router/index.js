import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../components/pages/projects.vue'
import articlePreview from '../components/blog/articlePreview.vue'
import signUp from '../components/Admin/Authenticate/signUp.vue'
import login from '../components/Admin/Authenticate/login.vue'
import createArticles from '../components/Admin/Dashboard/createArticles.vue'
import crudArticles from '../components/Admin/Dashboard/crudArticles.vue'
import createProjects from '../components/Admin/Dashboard/createProjects.vue'
import crudProjects from '../components/Admin/Dashboard/crudProjects.vue'
import Admin from '../views/Admin.vue'
import firebase from 'firebase/compat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/Admin',
    name: 'admin',
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/createArticles',
        name: 'createArticles',
        component: createArticles
      },
      {
        path: '/crudArticles',
        name: 'crudArticles',
        component: crudArticles
      },
      {
        path: '/createProjects',
        name: 'createProjects',
        component: createProjects
      },
      {
        path: '/crudProjects',
        name: 'crudProjects',
        component: crudProjects
      }
    ]
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  { path: '/articlePreview', name: 'articlePreview', component: articlePreview }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('/login')
  } else {
    next()
  }
})

export default router
