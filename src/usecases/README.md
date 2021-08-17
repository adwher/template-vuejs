# Use cases

Add your bussiness logic here and use it along the project. You can use `@usecases/` alias to access to code in this folder.

```ts
// usecases/findUsers

export function findUserByNickname(id: string) {
    // ... MAGIC!
}
```

```ts
// some/other/file.ts

import { findUserByNickname } from "@usecases/findUsers"

const user = findUserByNickname("adwher")
```