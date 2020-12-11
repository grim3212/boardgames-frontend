import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const SimpleLayout = () => import('./layouts/SimpleLayout.vue')
const Home = () => import('./views/Home.vue')
const NotFound = () => import('./views/NotFound.vue')


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: SimpleLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
      },
      {
        path: ':catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
          title: '404',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.title) {
    document.title = 'Board Game Voter - ' + to.meta.title
  } else {
    document.title = 'Board Game Voter'
  }
})

export default router
