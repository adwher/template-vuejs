import { defineConfig } from "vite"
import { resolve } from "path"

// plugins

import vue from "@vitejs/plugin-vue"
import markdown from "vite-plugin-md"
import jsx from "@vitejs/plugin-vue-jsx"

export default defineConfig({
    resolve: {
        alias: {
            "~/": resolve(__dirname, "./src"),

            "@components": resolve(__dirname, "./src/components"),
            "@models": resolve(__dirname, "./src/models"),
            "@services": resolve(__dirname, "./src/services"),
            "@usecases": resolve(__dirname, "./src/usecases"),
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
        }),

        jsx(),

        markdown()
    ]
})