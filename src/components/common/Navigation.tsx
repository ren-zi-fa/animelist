'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { useMedia } from 'react-use'
import { NavButton } from '@/components/common/NavButton'
import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui'
import { MenuIcon } from 'lucide-react'
import { HeaderLogo } from './HeaderLogo'
import Image from 'next/image'
type TypeRoute = {
	href: string
	label: string
}
const routes = [
	{
		href: '/',
		label: 'Overview'
	},
	{
		href: '/transactions',
		label: 'Transactions'
	},
	{
		href: '/accounts',
		label: 'Accounts'
	},
	{
		href: '/categories',
		label: 'Categories'
	}
]

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const router = useRouter()
	const pathname = usePathname()
	const isMobile = useMedia('(max-width: 1024px)', false)

	const onClick = (href: string) => {
		router.push(href)
		setIsOpen(false)
	}
	if (isMobile) {
		return (
			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger>
					<div
						className={
							'font-normal bg-white/10 hover:bg-white/20  border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white-30 transition '
						}
					>
						<MenuIcon className={'size-6'} />
					</div>
				</SheetTrigger>
				<SheetContent side={'left'} className={'px-2'}>
					<SheetHeader>
						<SheetTitle>
							<Image
								src={'/logo-animelist.png'}
								alt="logo"
								width={100}
								height={28}
								className='w-auto h-auto object-cover'
							/>
						</SheetTitle>
						<nav className={'flex flex-col gap-y-2 pt-6'}>
							{routes.map((route) => (
								<Button
									key={route.href}
									variant={route.href === pathname ? 'secondary' : 'ghost'}
									onClick={() => onClick(route.href)}
									className={'w-full justify-start'}
								>
									{route.label}
								</Button>
							))}
						</nav>
						<SheetDescription></SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		)
	}
	return (
		<nav className={'hidden lg:flex items-center gap-x-2 overflow-x-auto'}>
			{routes.map((route) => (
				<NavButton
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={pathname === route.href}
				/>
			))}
		</nav>
	)
}
