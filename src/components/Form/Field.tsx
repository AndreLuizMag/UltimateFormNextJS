import { FC, HTMLAttributes } from 'react'

interface FieldProps
	extends HTMLAttributes<HTMLDivElement> {}

export const Field: FC<FieldProps> = (props) => {
	return (
		<div
			className='ps-relative ds-flex flow-col-nw gap-3xs pb-6'
			{...props}
		/>
	)
}
