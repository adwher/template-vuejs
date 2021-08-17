// STYLE

import "./styles/index.scss"

// VUE

import { createApp } from "vue"
import { router } from "./router"

import View from "./app.vue"

const app = createApp(View)

app.use(router)
app.mount("#app")
