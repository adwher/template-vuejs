# Models

Set your declarations here and use it along the project. You can use `@models/` alias to access to all models in this folder.

```typescript
declare interface User {
    name: string
    email: string
    createdAt: number // timestamp
}
```

## Usage

Use the models normaly on your code 'cause that declarations who you put in this folder will be declared globaly.

```typescript
const user: User = {
    name: "adwher",
    email: "adwher@email.com",
    createdAt: Date.now()
}
```