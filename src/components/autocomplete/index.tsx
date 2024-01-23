import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Autocomplete as MuiAutocomplete } from '@mui/material'

import Loader from '@/components/loader'
import TextField from '@/components/text-field'

import {
	AutocompleteProps,
	GetOptionLabelType,
	IsOptionEqualToValueType,
	RenderInputType,
} from './types'
import { autocompleteStyle } from './styles'

const Autocomplete = ({
	autoFocus,
	fetchOptions,
	label,
	name,
	options = [],
	...props
}: AutocompleteProps) => {
	const { control } = useFormContext()

	const [open, setOpen] = useState(false)
	const loading = useMemo(() => open && !options?.length, [open, options])

	useEffect(() => {
		if (!loading) return

		fetchOptions()
	}, [loading])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const isOptionEqualToValue: IsOptionEqualToValueType = (
		option,
		currentOption
	) => option?.value === currentOption?.value

	const getOptionLabel: GetOptionLabelType = (option) => {
		if (!option) return ''

		if (typeof option === 'string') return option

		return option.label
	}

	const renderInput: RenderInputType = useCallback(
		(params) => (
			<TextField
				{...params}
				name={name}
				label={label}
				InputProps={{
					...params.InputProps,
					endAdornment: (
						<>
							{loading && <Loader />}
							{params.InputProps.endAdornment}
						</>
					),
				}}
			/>
		),
		[label, loading, name]
	)

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<MuiAutocomplete
					{...field}
					fullWidth
					options={options}
					loading={loading}
					renderInput={renderInput}
					open={open}
					onOpen={handleOpen}
					onClose={handleClose}
					noOptionsText="Nenhuma opção"
					getOptionLabel={getOptionLabel}
					isOptionEqualToValue={isOptionEqualToValue}
					sx={autocompleteStyle}
					onChange={(event, data) => {
						field.onChange(data)
					}}
					{...props}
				/>
			)}
		/>
	)
}

export default memo(Autocomplete)
