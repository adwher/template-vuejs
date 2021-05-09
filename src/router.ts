import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

// ROUTES

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("./pages/index.vue")
    },

    {
        path: "/playground",
        component: () => import("./pages/playground.vue")
    },
    
    {
        path: "/:error(.*)",
        component: () => import("./pages/error.vue")
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

// GUARDS