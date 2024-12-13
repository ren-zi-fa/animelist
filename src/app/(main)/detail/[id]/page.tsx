'use client'

import { AnimeDetail } from '@/components/common'

import React from 'react'

const Detail = ({ params }: { params: { id: string } }) => {
	const { id } = params
	return (
		<>
		<div className="pt-32 px-3 bg-gradient-to-b from-violet-300 to-violet-600 ">
			<AnimeDetail query={id} />

		</div>
		</>
	)
}

export default Detail
