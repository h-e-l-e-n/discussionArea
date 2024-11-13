import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../components/post.vue'),
    },
    {
      path: '/newpost',
      name: 'newpost',
      component: () => import('../components/newPost.vue'),
    },
  ],
})

export default router
