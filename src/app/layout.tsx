import type { Metadata } from 'next'
import * as React from 'react'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@/theme'

export const metadata: Metadata = {
	title: 'Front End Challenge',
	description:
		"Front End Challenge created by the Polícia Civil's Development Team",
}

const RootLayout = (props: { children: React.ReactNode }) => (
	<html lang="pt-BR">
		<body>
			<AppRouterCacheProvider options={{ enableCssLayer: true }}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{props.children}
				</ThemeProvider>
			</AppRouterCacheProvider>
		</body>
	</html>
)

export default RootLayout
