import React from 'react'
import { HeaderLogo } from './HeaderLogo'
import { Navigation } from './Navigation'
import { SearchFilter } from './SearchFilter'



export const Header = () => {
	return (
		<header className="bg-gradient-to-b from-violet-500 to-violet-300 lg:py-0  lg:mx-10 px-4 py-1 lg:px-14 ">
			<div className="max-w-screen-2xl ">
				<div className="lg:flex justify-between items-center">
					<HeaderLogo />
					<div className="hidden lg:inline-block w-1/4">
						<SearchFilter />
					</div>
					<Navigation />
				</div>
			</div>
		</header>
	)
}
