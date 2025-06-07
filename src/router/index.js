import {createRouter,createWebHashHistory} from 'vue-router'

const  routers = [
    {
      path:'/',
      component:()=>import('@/views/Home/index.vue'),
      children:[
        {
          path: '#resume',
          component: () => import('@/components/resume.vue')
        },
        {
          path: '#me',
          component: () => import('@/components/me.vue')
        },
        {
          path: '#web',
          component: () => import('@/components/web.vue')
        },
        {
          path: '#mobile',
          component: () => import('@/components/mobile.vue')
        },
        {
          path: '#visualization',
          component: () => import('@/components/visualization.vue')
        },
        {
          path: '#other',
          component: () => import('@/components/other.vue')
        },
      ]
    },
    {path:'/:pathMatch(.*)*',component:()=>import('@/views/404.vue')},    
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routers
})

export default router;