'use client'
import React, { useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '../Form'
import {
	validateCNPJ,
	validateCPF,
	validatePhone,
} from 'validations-br'
import { cpfMask } from '@/utils/masks'

type CreateFormData = z.infer<typeof schema>

const selctionOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

const radioOptions = [
	{ value: '1', label: 'Option 1' },
	{ value: '2', label: 'Option 2' },
	{ value: '3', label: 'Option 3' },
]

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
	select: z.string().refine((value) => value !== '', {
		message: 'Select é obrigatório',
	}),
	checkbox: z.boolean().refine((value) => value != false, {
		message: 'Checkbox é obrigatório',
	}),
	radio: z.string().refine((value) => value !== '', {
		message: 'Radio é obrigatório',
	}),
	cpf: z
		.string()
		.min(13, 'CPF é obrigatório')
		.refine((data) => validateCPF(data), {
			message: 'CPF inválido',
		}),
})

const defaultValuesForm: CreateFormData = {
	name: '',
	select: '',
	checkbox: false,
	radio: '',
	cpf: '',
}

export const DefaultForm = () => {
	const [isSaving, setIsSaving] = useState<boolean>(false)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const createForm = useForm<CreateFormData>({
		resolver: zodResolver(schema),
		mode: 'all',
		criteriaMode: 'all',
		defaultValues: defaultValuesForm,
		shouldUnregister: false,
	})

	const { handleSubmit, setValue, register, reset } =
		createForm

	const onInvalid = (errors: any) => {
		console.log('Function onInvalid')
		console.log(errors)
	}

	useEffect(() => {
		if (createForm.watch('cpf')) {
			const unmaskedCpf = createForm
				.watch('cpf')
				.replace(/\D/g, '')
			createForm.setValue('cpf', cpfMask(unmaskedCpf))
		}
	}, [createForm.watch('cpf')])

	const onSubmit = async (data: any) => {
		console.log('---- Submit ----')
		console.log('Name - ', data.name)
		console.log('Select - ', data.select)
		console.log('Checkbox - ', data.checkbox)
		console.log('Radio - ', data.radio)
		console.log('CPF - ', data.cpf)
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
			<FormProvider {...createForm}>
				<div className='ds-flex flow-col-nw gap-md'>
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
					<Form.Field>
						<Form.Label htmlFor='select'>Select</Form.Label>
						<Form.Select
							name='select'
							options={selctionOptions}
						/>
						<Form.ErrorMessage field='select' />
					</Form.Field>
					<Form.Field>
						<Form.Label htmlFor='checkbox' required>
							Checkox
						</Form.Label>
						<Form.Input type='checkbox' name='checkbox' />
						<Form.ErrorMessage field='checkbox' />
					</Form.Field>
					<Form.Field>
						<Form.Label htmlFor='radio' required>
							Radio
						</Form.Label>
						{radioOptions.map((item, index) => (
							<div
								key={index}
								className='ds-flex flow-row-nw justify-start align-center gap-xs'>
								<Form.Radio
									name='radio'
									id={`radio-${item.value}`}
									value={item.value}
									title=''
								/>
								<label htmlFor={`radio-${item.value}`}>
									{item.label}
								</label>
							</div>
						))}
						<Form.ErrorMessage field='radio' />
					</Form.Field>
					<Form.Field>
						<Form.Label htmlFor='cpf' required>
							CPF
						</Form.Label>
						<Form.Input
							type='text'
							name='cpf'
							placeholder='Seu CPF'
							maxLength={14}
						/>
						<Form.ErrorMessage field='cpf' />
					</Form.Field>
				</div>

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
			</FormProvider>
		</form>
	)
}
