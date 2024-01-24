import * as yup from 'yup'

import { PHONE_REGEX } from '@/utils/regex'
import { INVALID_EMAIL, INVALID_PHONE, REQUIRED_ERROR } from '@/utils/form'

import { FormData } from './types'

export const schema: yup.ObjectSchema<FormData> = yup.object().shape({
	person: yup
		.object({
			label: yup.string().required(REQUIRED_ERROR),
			value: yup.number().positive().integer().required(REQUIRED_ERROR),
		})
		.required(REQUIRED_ERROR),
	phone: yup
		.string()
		.matches(PHONE_REGEX, {
			message: INVALID_PHONE,
			excludeEmptyString: true,
		})
		.required(REQUIRED_ERROR),
	email: yup.string().email(INVALID_EMAIL).required(REQUIRED_ERROR),
})
