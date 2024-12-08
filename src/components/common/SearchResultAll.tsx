'use client'

import { fetchRecommendation, searchAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'

export const SearchResultAll = ({ keyword }: { keyword: string }) => {
	const { data: results, isError, isLoading } = searchAnime(keyword)
	const {
		data: recomendations,
		isError: errroRecommendation,
		isLoading: loadingRecomendation
	} = fetchRecommendation()

	if (isLoading) {
		return <div className="">loading..</div>
	}
	if (loadingRecomendation) {
		return <div className="">loading..</div>
	}
	const renderRecommendationAnime = () => {
		if (!recomendations) return null
		return (
			<div className=" p-8 gap-7">
				<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
					{recomendations?.map((recomendation, index) => (
						<div className="" key={`${recomendation.mal_id}-${index}`}>
							{recomendation.entry?.map((entry) => (
								<div
									key={entry.mal_id}
									className="flex px-4 hover:-translate-y-3"
								>
									<div className="relative">
										<Image
											src={entry.images.webp.image_url}
											alt={entry.title}
											width={0}
											height={0}
											sizes="100vw"
											className="w-[125px] h-auto object-cover mr-2 mt-2"
										/>
										<p className="absolute w-full flex text-xs h-10 overflow-hidden items-center  bg-opacity-75  gap-2  text-white px-2 left-0 bottom-0 bg-black">
											{entry.title}
										</p>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		)
	}
	return (
		<>
			<div className="py-2 px-8 border-b-[1px]">
				{!isLoading && !isError && results?.length === 0 && (
					<div className="border-b-2 ">
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
					<div className="">
						Result Of :{' '}
						<span className="underline text-red-600 font-bold">
							{decodeURIComponent(keyword)}
						</span>{' '}
					</div>
				)}
			</div>

			<div className="grid grid-cols-2 lg:grid-cols-12 lg:p-8 lg:gap-7">
				<div className="lg:col-span-8 grid grid-cols-2 gap-4">
					{results?.map((result) => (
						<div className="flex px-4" key={result.mal_id}>
							<Image
								alt={result.title}
								src={result.images.webp.image_url}
								width={0}
								height={0}
								sizes="100vw"
								className="lg:w-[125px] w-full h-fit lg:h-auto object-cover mr-2"
							/>
							<div className="px-2 text-white">
								<p className="text-sm font-semibold ">{result.title}</p>
								<div className="flex flex-wrap mt-2 text-sm">
									<div className="pr-2">Genre:</div>
									{result.genres.map((genre, index) => (
										<div key={index} className="space-x-2">
											{genre.name}
											{index < result.genres.length - 1 && ','}
										</div>
									))}
								</div>
								<div className="text-sm">Status :{result.status}</div>
								<div className="text-sm">Rating :{result.score}</div>
							</div>
						</div>
					))}
				</div>

				{results && results.length > 0 && (
					<div className="col-span-4 flex items-center justify-center width-auto">
						<div className="p-2 bg-white border-[1px] w-1/2 relative">
							<Image
								src="https://cdn.myanimelist.net/images/anime/6/33489.jpg"
								alt="gintama"
								width={200}
								height={150}
								className="w-full h-full"
							/>
							<p className="absolute w-full bottom-2 left-0 bg-black text-white px-2 text-center h-7 bg-opacity-75">
								Anime Terbaik
							</p>
						</div>
					</div>
				)}
			</div>
		</>
	)
}
