import type { ZodType, ZodError } from 'zod';
import { z } from 'zod';

export type ValidatorResult<T extends ZodType> =
	| { success: true; data: z.infer<T> }
	| { success: false; errors: ReturnType<ZodError['flatten']>['fieldErrors'] };

export const validator = <T extends ZodType>({
	schema,
	formData
}: {
	schema: T;
	formData: FormData;
}): ValidatorResult<T> => {
	const result = schema.safeParse(Object.fromEntries(formData.entries()));

	if (!result.success) {
		return { success: false, errors: z.flattenError(result.error) };
	}

	return { success: true, data: result.data };
};
