'use client'

import { searchAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'

const ResultSearch = ({ params }: { params: { keyword: string } }) => {
	const { keyword } = params
	const { data: results, isError, isLoading } = searchAnime(keyword)

	return (
		<div className="bg-gradient-to-t from-violet-600 to-violet-300 ">
			{!isLoading && !isError && results?.length === 0 && <div className='ml-80'>result of : { keyword} Not Found</div>}
			{(results || []).length > 0 && <div className='ml-10 '>Result Of : {keyword}</div>}

			<div className="grid grid-cols-5 p-8 gap-7">
				{results?.map((result) => (
					<div className="" key={result.mal_id}>
						<Image
							alt={result.title}
							src={result.images.webp.image_url}
							width={200}
							height={120}
							className="h-full w-full rounded-lg"
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ResultSearch
