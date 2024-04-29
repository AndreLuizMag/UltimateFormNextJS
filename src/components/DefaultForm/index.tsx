'use client'
import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../Form'

type CreateUserFormData = z.infer<typeof schema>

const schema = z.object({
	name: z
		.string()
		.min(3, 'Nome é obrigatório')
		.transform((name) => {
			return name
				.trim()
				.split(' ')
				.map((word) => {
					return word[0]
						.toLocaleUpperCase()
						.concat(word.substring(1))
				})
				.join(' ')
		}),
})

const defaultValuesForm: CreateUserFormData = {
	name: '',
}

export const DefaultForm = () => {
	const [isSaving, setIsSaving] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const createUserForm = useForm<CreateUserFormData>({
		resolver: zodResolver(schema),
		mode: 'all',
		criteriaMode: 'all',
		defaultValues: defaultValuesForm,
	})

	const { handleSubmit, setValue, register, reset } =
		createUserForm

	const onInvalid = (errors: any) => {
		console.log('Function onInvalid')
		console.log(errors)
	}

	const onSubmit = async (data: any) => {
		console.log('---- Submit ----')
		console.log('Name - ', data.name)
		console.log(
			'---- Delay - Simulate server response ----'
		)
		setIsLoading(true)
		setTimeout(() => {
			console.log('---- Server response ----')
			setIsLoading(false)
			setIsSaving(true)
			clearForm()
			console.log('---- End form ----')
		}, 2000)
	}

	const clearForm = () => {
		reset(defaultValuesForm)
	}

	const resetForm = () => {
		reset(defaultValuesForm)
		setIsLoading(false)
		setIsSaving(false)
	}

	return (
		<form
			id='default-form'
			className='ds-flex flow-col-nw gap-md'
			onSubmit={handleSubmit(onSubmit, onInvalid)}>
			<FormProvider {...createUserForm}>
				<Form.Field>
					<Form.Label htmlFor='name' required>
						Nome
					</Form.Label>
					<Form.Input
						type='text'
						name='name'
						placeholder='Nome Completo'
					/>
					<Form.ErrorMessage field='name' />
				</Form.Field>
			</FormProvider>

			<div className='ds-flex flow-row-nw gap-sm'>
				<button
					type='submit'
					disabled={isLoading || isSaving}>
					{!isLoading && !isSaving
						? 'Submit'
						: isLoading && !isSaving
						? 'Loading...'
						: isSaving
						? 'Submitted'
						: 'Submit'}
				</button>
				<button
					type='button'
					onClick={resetForm}
					className='bgc-transparent'>
					Reset
				</button>
			</div>
		</form>
	)
}
