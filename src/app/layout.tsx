import { ReactNode } from 'react'
import type { Metadata } from 'next'
import '@/styles/main.scss'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

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
			<body className={inter.className}>
				{children} <Analytics />
			</body>
		</html>
	)
}

export default RootLayout
