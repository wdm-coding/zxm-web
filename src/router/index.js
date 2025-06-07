import {createRouter,createWebHashHistory} from 'vue-router'

const  routers = [
    {
      path:'/',
      component:()=>import('@/views/Home/index.vue')
    },
    {path:'/:pathMatch(.*)*',component:()=>import('@/views/404.vue')},    
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routers
})

export default router;