# svelte-checkmate

a standard-schema validation library for your sveltekit remote functions, specifically the form function

## Installation

```bash
pnpm add svelte-checkmate
```

## Usage

```ts
import { validator } from 'svelte-checkmate';
import { form } from '$app/server';

export const login = form(async (formData) => {
	const newUser = await validator({
		schema: yourStandardSchema, // you can use zod, arktype or any standard schema supported validation library
		formData
	});

	if (!newUser.success) return { success: false, error: newUser.errors };

	db.insert(newUser.data);

	return { success: true };
});
```

## TODO

This library is nowhere to complete, I built it for my own use cases. But I plan to incorporate following things:

- [ ] Better error handling
- [ ] Maybe a `<Form />` component
