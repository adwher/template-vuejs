import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"

import "./style/index.scss"

import view from "./app.vue"
import routes from "pages-generated"

const app = createApp(view)

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

app.use(router)

app.mount("#app")