'use client'
import { useMedia } from 'react-use'
import {
	Button,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui'
import { MenuIcon } from 'lucide-react'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { NavButton } from './NavButton'
import { SearchFilter } from './SearchFilter'

const routes = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: 'https://myanimelist.net/forum/',
		label: 'Community'
	},
	{
		href: 'https://docs.api.jikan.moe/',
		label: 'Api Documentation'
	}
	// {
	// 	href:'/api/auth/signin',
	// 	label: 'Log In'
	// }
]

export const Navigation = () => {
	const isMobile = useMedia('(max-width:1024px)', false)
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const router = useRouter()
	const navigate = (href: string) => {
		router.push(href)
		setIsOpen(false)
	}

	const pathName = usePathname()
	if (isMobile) {
		return (
			<div className="flex items-center">
				<SearchFilter />
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<div
							className={
								'flex items-center font-normal px-4 hover:bg-white/20  border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white-30 transition '
							}
						>
							<MenuIcon className={'size-8  ml-auto'} />
						</div>
					</SheetTrigger>
					<SheetContent side={'left'}>
						<SheetHeader>
							<SheetTitle>
								<Image
									src={'/logo-animelist.png'}
									alt="logo"
									width={150}
									height={30}
									className="w-auto h-auto"
								/>
							</SheetTitle>
							<nav className="flex flex-col gap-y-4 py-4 ">
								{routes.map((route) => (
									<Button
										key={route.href}
										variant={route.href == pathName ? 'secondary' : 'ghost'}
										className="w-full justify-start"
										onClick={() => navigate(route.href)}
									>
										{route.label}
									</Button>
								))}
							</nav>

							<SheetDescription></SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		)
	}
	return (
		<nav className="hidden lg:flex  items-center gap-x-2 overflow-x-auto">
			{routes.map((route) => (
				<NavButton
					key={route.href}
					href={route.href}
					label={route.label}
					isActive={route.href == pathName}
				/>
			))}
		</nav>
	)
}
