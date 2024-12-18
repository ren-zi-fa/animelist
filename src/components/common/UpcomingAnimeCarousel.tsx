'use client'

import { fetchSeasonsUpcoming } from '@/tanstack/FetchSeasonUpcoming'
import React from 'react'
import {
	Card,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../ui'
import { useMedia } from 'react-use'
import { SkeletonAnimeCarousel } from './skeleton/SkeletonAnime'
import { cn } from '@/lib'
import CardContentCarousel from './carousel/CardContentCarousel'
import { useRouter } from 'next/navigation'

export const UpcomingAnimeCarousel = () => {
	const { data: upcomingAnime, error, isLoading } = fetchSeasonsUpcoming()
	const router = useRouter()
	const isMobile = useMedia('(max-width:1024px)', false)
	if (isLoading && isMobile === false) {
		return <SkeletonAnimeCarousel />
	}
	
	if (error) return <div>Error: {error.message}</div>
	const handleNavigateToDetail = (e:React.MouseEvent<HTMLDivElement, MouseEvent>,id:string) => {
			e.preventDefault
			router.push(`/detail/${id}`)
		}
	return (
		<Carousel
			opts={{
				align: 'start',
				loop: true
			}}
			className="w-full max-w-xs lg:max-w-2xl mx-auto "
		>
			<CarouselContent>
				{upcomingAnime?.map((anime, index) => (
					<CarouselItem
						key={`${anime.mal_id}-${index}`}
						className="md:basis-1/2 lg:basis-1/4"
					>
						<div className="group relative overflow-hidden flex-shrink-0 " onClick={(e)=>handleNavigateToDetail(e,anime.mal_id)}>
							<Card>
								<CardContentCarousel anime={anime} />
								<div className="">
									<p
										className={cn(
											'absolute bottom-0 left-0 w-full bg-black bg-opacity-75 text-white text-center transition-all duration-300 overflow-hidden',
											'group-hover:h-24 h-6'
										)}
									>
										{anime.title}
									</p>
								</div>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
