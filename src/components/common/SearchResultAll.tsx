'use client'

import { fetchRecommendation, searchAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'
import { useMedia } from 'react-use'
import { useRouter } from 'next/navigation'

export const SearchResultAll = ({ keyword }: { keyword: string }) => {
	const {
		data: results,
		isError,
		isLoading: loadingResult
	} = searchAnime(keyword)
	const { data: recommendations, isLoading: loadingRecomendation } =
		fetchRecommendation()
	const isMobile = useMedia('(max-width:1024px)', false)

	const router = useRouter()
	const handleNavigateToDetail = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		router.push(`/detail/${id}`)
	}
	const renderRecommendationAnimeDesktop = () => {
		if (!recommendations) return null
		return (
			<div className=" p-8 gap-7">
				<div className="w-full px-2 h-auto p-2 bg-white font-semibold">
					Anime recommendation
				</div>
				<div className="grid grid-cols-2 gap-4">
					{recommendations?.map((recommendation, index) => (
						<div
							className="py-2 bg-violet-900 w-full px-2 text-white "
							key={recommendation.mal_id}
						>
							<div
								className="flex cursor-pointer"
								onClick={(e) =>
									handleNavigateToDetail(e, recommendation.mal_id)
								}
							>
								<div className="font-bold text-xl mr-2">{index + 1}</div>
								<Image
									alt={recommendation.title}
									width={60}
									height={20}
									src={recommendation.images.webp.image_url}
									className="h-auto w-auto"
								/>
								<div className="text-sm ml-2">
									<p className="hover:underline">{recommendation.title}</p>
									<p className="text-yellow-300 text-xs">
										{recommendation.rating}
									</p>
									<p className="text-blue-300 text-xs">
										{recommendation.score}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}
	if (loadingRecomendation) {
		return <div className="loader-circle "></div>
	}
	if (loadingResult) {
		return <div className="loader-circle "></div>
	}
	const renderRecommendationAnimeMobile = () => {
		return (
			<div className="flex flex-col items-center justify-center px-4">
				<div className="w-full px-2 h-auto p-2 bg-white font-semibold">
					Anime recommendation
				</div>
				{recommendations?.map((recommendation, index) => (
					<div
						className="py-2 bg-violet-900 w-full px-2 text-white cursor-pointer "
						key={recommendation.mal_id}
					>
						<div
							className="flex"
							onClick={(e) => handleNavigateToDetail(e, recommendation.mal_id)}
						>
							<div className="font-bold text-xl mr-2">{index + 1}</div>
							<Image
								alt={recommendation.title}
								width={60}
								height={20}
								src={recommendation.images.webp.image_url}
								className="h-auto w-auto"
							/>
							<div className="text-sm ml-2">
								<p className="hover:underline">{recommendation.title}</p>
								<p className="text-yellow-300 text-xs">
									{recommendation.rating}
								</p>
								<p className="text-blue-300 text-xs">{recommendation.score}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}

	return (
		<>
			<div className="py-2  ">
				{!loadingResult && !isError && results?.length === 0 && (
					<div className="">
						<p className="text-2xl mx-auto text-center mb-2">
							result of :
							<span
								className="
							 text-red-600 font-bold"
							>
								{decodeURIComponent(keyword)}
							</span>{' '}
							Not Found
						</p>

						{isMobile
							? renderRecommendationAnimeMobile()
							: renderRecommendationAnimeDesktop()}
					</div>
				)}
				{(results || []).length > 0 && (
					<div className="text-center">
						Result Of :{' '}
						<span
							className="
						 text-red-600 font-bold"
						>
							{decodeURIComponent(keyword)}
						</span>{' '}
					</div>
				)}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 lg:p-3">
				{results?.map((result) => (
					<div
						className="flex p-4 cursor-pointer"
						key={result.mal_id}
						onClick={(e) => handleNavigateToDetail(e, result.mal_id)}
					>
						<Image
							alt={result.title}
							src={result.images.webp.image_url}
							width={0}
							height={0}
							sizes="100vw"
							className="lg:w-[125px] w-24 border-2  h-auto object-cover mr-2"
						/>
						<div className="px-2 text-white  w-1/2 max-w-xs break-words">
							<p className="text-sm font-semibold hover:underline ">
								{result.title}
							</p>
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
		</>
	)
}
