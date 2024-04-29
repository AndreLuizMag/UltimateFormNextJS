import { FC, LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps
	extends LabelHTMLAttributes<HTMLLabelElement> {
	children: ReactNode
	required?: boolean
}

export const Label: FC<LabelProps> = (
	{ children, required },
	props
) => {
	return (
		<label {...props}>
			{children}
			{required ? '*' : null}
		</label>
	)
}
