import { Typography } from '@mui/material'

interface ErrorMessageProps {
	message: string
}

const ErrorMessage = ({ message }: ErrorMessageProps) => (
	<Typography component="span" variant="caption" color="red">
		{message}
	</Typography>
)

export default ErrorMessage
