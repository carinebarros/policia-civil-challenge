'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, Grid } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'

import { getPeople } from '@/api/requests'

import Autocomplete from '@/components/autocomplete'
import type { Option } from '@/components/autocomplete/types'
import TextField from '@/components/text-field'

import { FormData } from './types'
import { schema } from './schema'

const Form = () => {
	const [personOptions, setPersonOptions] = useState<Option[]>()

	const methods = useForm<FormData>({
		defaultValues: {
			person: null,
			phone: null,
			email: null,
		},
		resolver: yupResolver(schema),
	})
	const {
		handleSubmit,
		register,
		formState: { isSubmitting, isValidating },
	} = methods

	const fetchOptions = () => {
		getPeople().then((res) => {
			setPersonOptions(() =>
				res.map((person) => ({ value: person.id, label: person.name }))
			)
		})
	}

	const onSubmit = handleSubmit((data) => {
		const formattedData = {
			pessoa: data.person?.value,
			telefone: data.phone,
			email: data.email,
		}

		console.log(formattedData)
	})

	return (
		<FormProvider {...methods}>
			<form onSubmit={onSubmit}>
				<Grid container maxWidth={400} spacing={4}>
					<Grid item xs={12}>
						<Autocomplete
							label="Pessoa"
							name="person"
							options={personOptions}
							fetchOptions={fetchOptions}
							placeholder="Selecione uma opção"
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							autoFocus={false}
							label="Telefone"
							{...register('phone')}
							type="tel"
							fullWidth
							placeholder="85 912345678"
						/>
					</Grid>

					<Grid item xs={12}>
						<TextField
							label="E-mail"
							{...register('email')}
							type="email"
							fullWidth
							placeholder="exemplo@email.com"
						/>
					</Grid>

					<Grid item xs={12}>
						<Button
							fullWidth
							variant="contained"
							size="large"
							type="submit"
							disabled={isSubmitting || isValidating}
						>
							Enviar
						</Button>
					</Grid>
				</Grid>
			</form>
		</FormProvider>
	)
}

export default Form
