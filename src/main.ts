// STYLE

import "./style/index.scss"

// VUE

import AppView from "./app.vue"

import { createApp } from "vue"
import { router } from "./router"

const app = createApp(AppView)

app.use(router)

app.mount("#app")