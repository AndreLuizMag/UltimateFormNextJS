import React, { FC, ReactNode } from 'react'

interface RootProps {
	children: ReactNode
}

export const Root: FC<RootProps> = (
	{ children },
	props
) => {
	return <div {...props}>{children}</div>
}
Root.displayName = 'Card.Root'
