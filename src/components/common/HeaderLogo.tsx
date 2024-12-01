import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const HeaderLogo = () => {
	return (
		<Link href="/">
			<div className="items-center hidden lg:flex">
				<Image src={'/logo-animelist.png'} alt="logo" width={150} height={28} />
			</div>
		</Link>
	)
}


