'use client'

import { fetchRecommendation, searchAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'

export const SearchResultAll = ({ keyword }: { keyword: string }) => {
	const { data: results, isError, isLoading } = searchAnime(keyword)
	const {
		data: recomendations,
		isError: errorRandom,
		isLoading: loadingRecomendation
	} = fetchRecommendation()

	const renderRecommendationAnime = () => {
		if (!recomendations) return null
		return (
			<div className="grid grid-cols-2 lg:grid-cols-5 p-8 gap-7">
				{recomendations?.map((recomendation, index) => (
					<div className="" key={`${recomendation.mal_id}-${index}`}>
						{recomendation.entry?.map((entry) => (
							<div
								key={entry.mal_id}
								className="card my-4 w-[200px] h-[300px] overflow-hidden rounded-md flex-shrink-0 select-none cursor-pointer"
							>
								<div className="card-details text-white font-bold text-2xl">
									{entry.title}
								</div>
								<Image
									src={entry.images.webp.image_url}
									alt={entry.title}
									width={0}
									height={0}
									sizes="100vw"
									className="w-full h-full object-cover"
								/>
							</div>
						))}
					</div>
				))}
			</div>
		)
	}
	return (
		<>
			{!isLoading && !isError && results?.length === 0 && (
				<div className="">
					<p className="ml-80 text-2xl">
						{' '}
						result of :{' '}
						<span className="underline text-red-600 font-bold">
							{decodeURIComponent(keyword)}
						</span>{' '}
						Not Found
					</p>

					{renderRecommendationAnime()}
				</div>
			)}
			{(results || []).length > 0 && (
				<div className="ml-10 ">
					Result Of :{' '}
					<span className="underline text-red-600 font-bold">
						{decodeURIComponent(keyword)}
					</span>{' '}
				</div>
			)}

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
		</>
	)
}
