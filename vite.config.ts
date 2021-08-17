import { defineConfig } from "vite"
import { resolve } from "path"

// plugins

import vue from "@vitejs/plugin-vue"

export default defineConfig({
    resolve: {
        alias: {
            "~": resolve(__dirname, "./src"),

            "@components": resolve(__dirname, "./src/components"),
            "@hooks": resolve(__dirname, "./src/hooks"),
            "@layouts": resolve(__dirname, "./src/layouts"),
            "@models": resolve(__dirname, "./src/models"),
            "@pages": resolve(__dirname, "./src/pages"),
            "@services": resolve(__dirname, "./src/services"),
            "@usecases": resolve(__dirname, "./src/usecases"),
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
    ]
})