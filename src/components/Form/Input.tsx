import React, { FC } from 'react'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	name: string
}

export const Input: FC<InputProps> = (props) => {
	const { register } = useFormContext()

	return (
		<input
			id={props.name}
			{...register(props.name)}
			{...props}
		/>
	)
}
