'use client'

import React from 'react'
import { TopAnimeCarousel } from './TopAnimeCarousel'
import { UpcomingAnimeCarousel } from './UpcomingAnimeCarousel'

export const AnimeList = () => {
	return (
		<div className="h-fit bg-gradient-to-t from-violet-500 to-violet-300 grid grid-cols-1 lg:grid-cols-6 ">
			<div className="col-span-4 px-4 border-r-2 border-violet-600  mt-5">
				<div className="mb-10">
					<h1 className="text-center text-3xl mb-4 text-gray-300">Top Anime</h1>
					<TopAnimeCarousel />
				</div>
				<div className="mb-10">
					<h1 className="text-center text-3xl mb-4 text-gray-300">Seasonal Upcoming Anime</h1>
					<UpcomingAnimeCarousel />
				</div>
			</div>
			<div className="col-span-2 h-screen bg-gradient-to-t  from-violet-500 to-violet-300 "></div>
		</div>
	)
}
