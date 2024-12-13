'use client'

import React from 'react'
import { TopAnimeCarousel } from './TopAnimeCarousel'
import { UpcomingAnimeCarousel } from './UpcomingAnimeCarousel'
import { AnimeSchedules } from './AnimeSchedules'
import { useMedia } from 'react-use'
import { TopAnimeMobile } from './TopAnimeMobile'
import { UpcomingMobile } from './UpcomingMobile'

export const AnimeList = () => {
	const isMobile = useMedia('(max-width:1024px)', false)
	return (
		<div className="h-full lg:bg-gradient-to-t bg-violet-300 from-violet-500 to-violet-300 grid grid-cols-1 lg:grid-cols-6 ">
			<div className="col-span-4 lg:px-4 lg:border-r-2 lg:border-violet-600  mt-5">
				<div className="mb-10">
					{isMobile ? (
						<TopAnimeMobile />
					) : (
						<div className="">
							<h1 className="text-center text-3xl mb-4 text-gray-300">
								Top Anime
							</h1>
							<TopAnimeCarousel />
						</div>
					)}
				</div>
				<div className="mb-10">
					{!isMobile && (
						<div className="">
							<h1 className="text-center text-3xl mb-4 text-gray-300">
								Seasonal Upcoming Anime
							</h1>
							<UpcomingAnimeCarousel/>
						</div>
					)}
				</div>
			</div>
			<div className="col-span-2 lg:bg-gradient-to-t  lg:from-violet-500 lg:to-violet-300 mt-5 bg-gradient-to-b from-violet-300 to-violet-500  ">
				<AnimeSchedules />
			</div>
		</div>
	)
}
