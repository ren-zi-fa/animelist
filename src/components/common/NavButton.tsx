import React from 'react'
import { Button } from '../ui'
import Link from 'next/link'
import { cn } from '@/lib'

interface INavButton {
	label: string
	href: string
	isActive?: boolean
}

export const NavButton = ({ label, href, isActive }: INavButton) => {
	return (
		<Button
			asChild
			size={'sm'}
			className={cn(
				'w-full lg:w-auto justify-between font-normal hover:bg-white/30 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition',
				isActive ? 'bg-white/10' : 'bg-transparent'
			)}
		>
			<Link href={href}>{label}</Link>
		</Button>
	)
}
