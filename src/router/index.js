import { createRouter, createWebHistory } from 'vue-router'
import Explorer from '../views/Explorer/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'explorer',
      redirect: {
        name: 'collaborate'
      },
      component: Explorer
    },
    {
      path: '/generate',
      name: 'generate',
      component: () => import('../views/Generate/Index.vue')
    },
    {
      path: '/collaborate',
      name: 'collaborate',
      component: () => import('../views/Collaborate/Index.vue')
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: () => import('../views/Evaluate/Index.vue')
    },
    {
      path: '/communicate',
      name: 'communicate',
      component: () => import('../views/Communicate/Index.vue')
    },
  ]
})



export default router
