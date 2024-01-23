import {
	TextField as MuiTextField,
	TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { RefObject, forwardRef, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import ErrorMessage from '../error-message'

type TextFieldProps = MuiTextFieldProps & {
	name: string
}

type TextFieldRef =
	| ((instance: HTMLDivElement | null) => void)
	| RefObject<HTMLDivElement>
	| null
	| undefined

const TextField = forwardRef(
	({ name, ...props }: TextFieldProps, ref: TextFieldRef) => {
		const { register, formState } = useFormContext()

		console.log({ errors: formState.errors })

		const errorMessage = useMemo(
			() => formState.errors[name]?.message?.toString(),
			[formState.errors[name]]
		)

		return (
			<div>
				<MuiTextField {...register(name)} {...props} ref={ref} />
				{errorMessage && <ErrorMessage message={errorMessage} />}
			</div>
		)
	}
)

export default TextField
