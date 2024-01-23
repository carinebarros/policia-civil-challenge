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
	({ name, placeholder, ...props }: TextFieldProps, ref: TextFieldRef) => {
		const { register, formState } = useFormContext()

		const errorMessage = useMemo(
			() => formState.errors[name]?.message?.toString(),
			[formState.errors[name]]
		)

		return (
			<div>
				<MuiTextField
					{...register(name)}
					{...props}
					ref={ref}
					error={Boolean(errorMessage)}
					InputLabelProps={{
						shrink: Boolean(placeholder),
					}}
					variant="standard"
					placeholder={placeholder}
				/>
				{errorMessage && <ErrorMessage message={errorMessage} />}
			</div>
		)
	}
)

export default TextField
