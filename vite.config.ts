import { defineConfig } from "vite"
import { resolve } from "path"

// plugins

import vue from "@vitejs/plugin-vue"

export default defineConfig({
    resolve: {
        alias: {
            "~/": resolve(__dirname, "./src"),

            "@components": resolve(__dirname, "./src/components"),
            "@models": resolve(__dirname, "./src/models"),
            "@services": resolve(__dirname, "./src/services"),
            "@useCases": resolve(__dirname, "./src/useCases"),
            "@layouts": resolve(__dirname, "./src/layouts"),
        }
    },

    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/],
            template: {
                compilerOptions: {
                    isCustomElement: tag => tag === "feather-icon"
                }
            }
        })
    ]
})