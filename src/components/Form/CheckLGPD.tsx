import React, { FC, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface CheckLGPDProps
	extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	name: string
	onChange?: any
	isChecked: any
}

export const CheckLGPD: FC<CheckLGPDProps> = ({
	id,
	name,
	onChange,
	isChecked,
}) => {
	const { register } = useFormContext()

	return (
		<div className='ds-flex-start gap-sm'>
			<input
				type='checkbox'
				id={id}
				{...register(name)}
				checked={isChecked}
				onChange={(e) => {
					if (!!onChange) {
						onChange(e?.target?.checked)
					}
				}}
			/>
			<label
				htmlFor={id}
				className='flex-bgs color-gray-50'>
				A Bevi realiza o tratamento de dados pessoais de
				acordo com as bases legais previstas na Lei Geral de
				Proteção de Dados (LGPD).
			</label>
		</div>
	)
}
