import { FC, HTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface ErrorMessageProps
	extends HTMLAttributes<HTMLDivElement> {
	field: string
}

function get(obj: Record<any, any>, path: string) {
	const travel = (regexp: RegExp) =>
		String.prototype.split
			.call(path, regexp)
			.filter(Boolean)
			.reduce(
				(res, key) =>
					res !== null && res !== undefined
						? res[key]
						: res,
				obj
			)

	const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

	return result
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
	field,
}) => {
	const {
		formState: { errors },
	} = useFormContext()

	const fieldError = get(errors, field)

	if (!fieldError) {
		return null
	}

	return (
		<small className='ps-absolute bottom-0 left-0'>
			{fieldError.message?.toString()}
		</small>
	)
}
