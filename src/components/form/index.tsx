'use client'

import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@mui/material'
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
	const { handleSubmit, register } = methods

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
				<Autocomplete
					label="Pessoa"
					name="person"
					options={personOptions}
					fetchOptions={fetchOptions}
					autoFocus
				/>

				<TextField
					label="Telefone"
					{...register('phone')}
					type="tel"
					fullWidth
				/>

				<TextField
					label="E-mail"
					{...register('email')}
					type="email"
					fullWidth
				/>

				<Button fullWidth variant="contained" size="large" type="submit">
					Enviar
				</Button>
			</form>
		</FormProvider>
	)
}

export default Form
