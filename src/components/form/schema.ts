import { PHONE_REGEX } from '@/utils/regex'
import * as yup from 'yup'
import { FormData } from './types'

const REQUIRED_ERROR = 'Campo obrigatório'
const INVALID_PHONE = 'Telefone inválido'
const INVALID_EMAIL = 'E-mail inválido'

export const schema: yup.ObjectSchema<FormData> = yup.object().shape({
	person: yup
		.object({
			label: yup.string().required(),
			value: yup.number().positive().integer().required(),
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
