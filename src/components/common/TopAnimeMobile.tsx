'use client'

import { fetchTopAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'
import { SkeletonAnimeList } from './skeleton/SkeletonAnime'
import { useMedia } from 'react-use'
import { useRouter } from 'next/navigation'
export const TopAnimeMobile = () => {
	const { data: anime, isLoading, error } = fetchTopAnime()
	const isMobile = useMedia('(max-width:1024px)', false)
	const router = useRouter()
	if (error) return <div>Error: {error.message}</div>
	if (isLoading && isMobile) {
		return <SkeletonAnimeList />
	}

	const handleNavigateToDetail = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		router.push(`/detail/${id}`)
	}

	return (
		<div className="flex flex-col items-center justify-center px-4">
			<div className="w-full px-2 h-auto p-2 text-black bg-white font-semibold">
				Top Anime
			</div>
			{anime?.map((anime, index) => (
				<div
					className="py-2 bg-violet-900 w-full px-2 text-white "
					key={anime.mal_id}
				>
					<div
						className="flex hover:cursor-pointer"
						onClick={(e) => handleNavigateToDetail(e, anime.mal_id)}
					>
						<div className="font-bold text-xl mr-2">{index + 1}</div>
						<Image
							alt={anime.title}
							width={60}
							height={20}
							src={anime.images.webp.image_url}
							className="h-auto w-auto"
						/>
						<div className="text-sm ml-2">
							<p className="hover:underline">{anime.title}</p>
							<p className="text-yellow-300 text-xs">
								{anime.broadcast.day} {anime.broadcast.time}
							</p>
							<p className="text-gray-300 text-xs">
								Episodes: {anime.episodes}
							</p>
							<p className="text-gray-300 text-xs">Rating: {anime.score}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
