import type { ElementType } from 'react'
import type { AutocompleteProps as MuiAutocompleteProps } from '@mui/material'

export interface Option {
	label: string
	value: number | string
}

export type MuiAutocompletePropsType = MuiAutocompleteProps<
	Option,
	boolean,
	boolean,
	boolean,
	ElementType<any, keyof JSX.IntrinsicElements>
>

export interface AutocompleteProps {
	fetchOptions: () => void
	label: string
	name: string
	options?: Option[]
	placeholder?: string
}

export type GetOptionLabelType = MuiAutocompletePropsType['getOptionLabel']

export type IsOptionEqualToValueType =
	MuiAutocompletePropsType['isOptionEqualToValue']

export type RenderInputType = MuiAutocompletePropsType['renderInput']
