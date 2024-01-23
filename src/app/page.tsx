import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Home = () => (
	<Container maxWidth="lg">
		<Box
			sx={{
				my: 4,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
				Front End Challenge
			</Typography>
		</Box>
	</Container>
)

export default Home