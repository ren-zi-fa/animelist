import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeaderLogo = () => {
	return (
		<div className="hidden lg:flex">
			<Link href={'/'}>
				<Image
					src={'/logo-animelist.png'}
					alt="logo"
					width={200}
					height={200}
					className="w-auto h-auto"
				/>
			</Link>
		</div>
	)
}
