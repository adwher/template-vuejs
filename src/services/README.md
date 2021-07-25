# Services

Set your setup code like `axios` config o `firebase` instance. You can use `@services/` alias to access to code in this folder.

```ts
// services/axios.ts
import axios from "axios";

// ...
```

Then you got at a `axios` config file.

```ts
// main.ts

import "@services/axios";
```