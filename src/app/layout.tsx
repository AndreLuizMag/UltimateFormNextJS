import { ReactNode } from 'react'
import type { Metadata } from 'next'
import '@/styles/main.scss'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
	title: 'U.F.N',
	description: 'The Ultimate Form for Next.js',
}

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return (
		<html lang='en'>
			{children}
			<Analytics />
		</html>
	)
}

export default RootLayout
