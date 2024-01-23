'use client'
import { Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Poppins({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
})

const theme = createTheme({
	palette: {
		mode: 'light',
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})

export default theme
