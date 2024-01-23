import axios from 'axios'

import { Person } from './types'

export const BASE_URL = 'http://localhost:4000'

const instance = axios.create({
	baseURL: BASE_URL,
})

type ListParams = {
	_page?: number | string
	_limit?: number | string
	_sort?: string
	_order?: string
	_end?: string
	_start?: string
}

export type GetPeopleParams = ListParams &
	Partial<Person> & {
		name_like?: string
	}

export type GetPeopleReturn = Person[]

export const getPeople = (params?: GetPeopleParams): Promise<GetPeopleReturn> =>
	instance
		.get('/people/', { params })
		.then((response) => response.data as Person[])
