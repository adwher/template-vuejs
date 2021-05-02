// VUE

declare module "*.vue" {
    import { defineComponent } from "vue"

    const component: ReturnType<typeof defineComponent>
    export default component
}

// VITEJS

declare interface ImportMeta {
    env: {
        MODE: string
        BASE_URL: string
        PROD: boolean
        DEV: boolean
        
        [key: string]: any
    }
}