'use client'

import {InputHTMLAttributes} from 'react'
import {FieldError, UseFormRegisterReturn} from 'react-hook-form'

type Props = {
	id: string
	label: string
	error?: FieldError
	registration: UseFormRegisterReturn
} & InputHTMLAttributes<HTMLInputElement>

export function FormInput({
	id,
	label,
	error,
	registration,
	type = 'text',
	placeholder,
	...rest
}: Props) {
	return (
		<div className='space-y-1'>
			<label
				htmlFor={id}
				className='block text-sm font-medium text-gray-700'
			>
				{label}
			</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				{...registration}
				{...rest}
				className={`w-full px-4 py-2 border ${
					error ? 'border-red-500' : 'border-gray-300'
				} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
			/>
			{error && <p className='text-sm text-red-500'>{error.message}</p>}
		</div>
	)
}
