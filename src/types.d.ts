// VUE

declare module "*.vue" {
    import { defineComponent } from "vue"

    const component: ReturnType<typeof defineComponent>
    export default component
}

// MARKDOWN

declare module "*.md"

// VITEJS

declare interface ImportMeta {
    /** Vite exposes [env variables](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes) on the special `import.meta.env` object. Some built-in variables are available in all cases */
    env: {
        MODE: string
        BASE_URL: string
        PROD: boolean
        DEV: boolean
        
        [key: string]: any
    }

    /** Vite supports [importing multiple modules](https://vitejs.dev/guide/features.html#glob-import) from the file system via the special `import.meta.glob` function */
    glob(path: string): any
}