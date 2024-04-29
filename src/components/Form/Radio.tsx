import React, { FC, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface RadioProps
	extends InputHTMLAttributes<HTMLInputElement> {
	name: string
	value: string
}

export const Radio: FC<RadioProps> = ({
	name,
	value,
	...props
}) => {
	const { register } = useFormContext()
	return (
		<input
			type='radio'
			id={`${value}`}
			value={value}
			{...register(name)}
			{...props}
		/>
	)
}
