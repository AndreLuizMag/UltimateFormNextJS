import React, { FC } from 'react'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface Option {
	value: string
	label: string
}

interface SelectProps
	extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	options: Option[]
}

export const Select: FC<SelectProps> = (props) => {
	const { register } = useFormContext()

	return (
		<div>
			<select id={props.name} {...register(props.name)}>
				<option value=''>Selecione</option>
				{props.options.map((item, index) => (
					<option value={item.value} key={index}>
						{item.label}
					</option>
				))}
			</select>
		</div>
	)
}
