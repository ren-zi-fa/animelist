'use client'

import { PropsWithChildren } from 'react'

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<main className="">{children}</main>
		</>
	)
}

export default MainLayout
