'use client'

import { Header } from '@/components/common'
import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<main className="lg:px-10 ">{children}</main>
		</>
	)
}

export default MainLayout
