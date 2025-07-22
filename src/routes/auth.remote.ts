import { form } from '$app/server';
import { validator } from '$lib/validator.js';
import { type } from 'arktype';
import z from 'zod';

const zodSchema = z.object({
	email: z.email(),
	password: z.string().min(6)
});

const arkschema = type({
	email: 'string.email',
	password: 'string'
});

export const login = form(async (formData) => {
	const checked = await validator({
		schema: zodSchema,
		formData
	});

	if (!checked.success) return { success: false, error: checked.errors };

	console.log(checked.data);

	return { success: true };
});
