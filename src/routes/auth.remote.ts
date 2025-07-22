import { form } from '$app/server';
import { validator } from '$lib/validator.js';
import z from 'zod';

export const login = form(async (formData) => {
	validator({
		schema: z.object({
			email: z.email(),
			password: z.string().min(6)
		}),
		formData
	});
});
