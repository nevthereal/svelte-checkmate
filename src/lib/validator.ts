import type { StandardSchemaV1 } from '@standard-schema/spec';

// import type { ZodTypeZodError } from 'zod';

export type ValidatorResult<T extends StandardSchemaV1> =
	| { success: true; data: StandardSchemaV1.InferOutput<T> }
	| { success: false; errors: StandardSchemaV1.InferOutput<T> };

export const validator = async <T extends StandardSchemaV1>({
	schema,
	formData
}: {
	schema: T;
	formData: FormData;
}): Promise<ValidatorResult<T>> => {
	const result = await schema['~standard'].validate(Object.fromEntries(formData.entries()));

	if (result.issues) {
		return { success: false, errors: result.issues };
	}

	return { success: true, data: result.value };
};
