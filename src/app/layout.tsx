import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider } from '@/providers/QueryProvider'
import { Footer, Header } from '@/components/common'


export const metadata: Metadata = {
	title: 'アニメ',
	description: 'fetch from jikan moe'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<QueryProvider>
				<body suppressHydrationWarning={true}>
					<Header />
					<main className="lg:px-10 ">{children}</main>
					<Footer/>
				</body>
			</QueryProvider>
		</html>
	)
}
