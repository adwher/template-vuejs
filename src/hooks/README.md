# Hooks

Put your `hooks` using brand new composition API components. You can use `@hooks/` alias to access to all components in this folder.

```ts
// hooks/useCounter.ts

export function useMyHook() {
    // TO-DO
}
```

```vue
<template>
    <!-- My view -->
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useMyHook } from "@hooks/useMyHook"

export default defineComponent({
    setup() {
        const { state } = useMyHook()

        return { state }
    }
})
</script>
```