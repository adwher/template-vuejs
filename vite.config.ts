import { defineConfig } from "vite"
import { resolve } from "path"

// plugins

import vue from "@vitejs/plugin-vue"
import markdown from "vite-plugin-md"
import components from "vite-plugin-components"

export default defineConfig({
    resolve: {
        alias: {
            "~/": resolve(__dirname, "./src"),

            "@models": resolve(__dirname, "./src/models"),
            "@services": resolve(__dirname, "./src/services"),
            "@useCases": resolve(__dirname, "./src/useCases"),
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
        }),

        markdown(),

        components({
            extensions: ["vue"],
            dirs: ["src/components", "src/layouts"],
        })
    ]
})