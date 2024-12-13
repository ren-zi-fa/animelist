import { fetchSchedules } from '@/tanstack/FetchSchedules'
import Image from 'next/image'
import React from 'react'
import { SkeletonAnimeList } from './skeleton/SkeletonAnime'
import { useMedia } from 'react-use'

export const AnimeSchedules = () => {
	const { data: schedules, isLoading, error } = fetchSchedules()
	const isMobile = useMedia('(max-width:1024px)',false)
	if (error) return <div>Error: {error.message}</div>
	if (isLoading && isMobile)  {
		return <SkeletonAnimeList />
	}

	return (
		<div className="flex flex-col items-center justify-center px-4">
			<div className="w-full px-2 h-auto p-2 bg-white font-semibold">
				Anime Schedules
			</div>
			{schedules?.map((schedule, index) => (
				<div
					className="py-2 bg-violet-900 w-full px-2 text-white "
					key={schedule.mal_id}
				>
					<div className="flex">
						<div className="font-bold text-xl mr-2">{index + 1}</div>
						<Image
							alt={schedule.title}
							width={60}
							height={20}
							src={schedule.images.webp.image_url}
						/>
						<div className="text-sm ml-2">
							<p className="">{schedule.title}</p>
							<p className="text-yellow-300 text-xs">
								{schedule.broadcast.day}
								{', '}
								{schedule.broadcast.time}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
