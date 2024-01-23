import { Box, Container, Paper, Typography } from '@mui/material'

import Form from '@/components/form'

import {
	boxStyles,
	formWrapperStyles,
	mainStyles,
	titleStyles,
} from '@/styles/homepage'

const Home = () => (
	<Box component="main" sx={mainStyles}>
		<Container maxWidth="lg">
			<Box sx={boxStyles}>
				<Paper sx={formWrapperStyles}>
					<Typography variant="h4" component="h1" sx={titleStyles}>
						Formulário
					</Typography>
					<Form />
				</Paper>
			</Box>
		</Container>
	</Box>
)

export default Home
