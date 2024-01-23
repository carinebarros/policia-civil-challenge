import type { Option } from '@/components/autocomplete/types'

export interface FormData {
	person: Option | null
	phone: string | null
	email: string | null
}
