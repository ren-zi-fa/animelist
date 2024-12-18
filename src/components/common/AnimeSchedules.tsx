'use client'

import { fetchSchedules } from '@/tanstack/FetchSchedules'
import Image from 'next/image'
import React from 'react'
import { SkeletonAnimeList } from './skeleton/SkeletonAnime'
import { useMedia } from 'react-use'
import { useRouter } from 'next/navigation'

export const AnimeSchedules = () => {
	const { data: schedules, isLoading, error } = fetchSchedules()
	// const isMobile = useMedia('(max-width:1024px)', false)
	const router = useRouter()
	if (error) return <div>Error: {error.message}</div>
	if (isLoading) {
		return <SkeletonAnimeList />
	}

	const handleNavigateToDetail = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault
		router.push(`/detail/${id}`)
	}

	return (
		<div className="flex flex-col items-center justify-center px-4 mb-10 lg:mb-0">
			<div className="w-full px-2 h-auto p-2 bg-white font-semibold">
				Anime Schedules
			</div>
			{schedules?.map((schedule, index) => (
				<div
					className="py-2 bg-violet-900 w-full px-2 text-white "
					key={schedule.mal_id}
				>
					<div className="flex hover:cursor-pointer" onClick={(e) => handleNavigateToDetail(e,schedule.mal_id)}>
						<div className="font-bold text-xl mr-2">{index + 1}</div>
						<Image
							alt={schedule.title}
							width={60}
							height={20}
							src={schedule.images.webp.image_url}
							className="h-auto w-auto"
						/>
						<div className="text-sm ml-2">
							<p className="hover:underline">{schedule.title}</p>
							<p className="text-yellow-300 text-xs">
								{schedule.broadcast.day}
								{', '}
								{schedule.broadcast.time}
							</p>
							<p className="text-blue-300 text-xs">{schedule.score}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
