import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode
}>) => {
	return <body className={inter.className}>{children}</body>
}

export default RootLayout
