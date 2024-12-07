import { fetchSeasonsUpcoming } from '@/tanstack/FetchSeasonUpcoming'
import React from 'react'
import {
	Card,
	CardContent,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '../ui'
import Image from 'next/image'
import { useMedia } from 'react-use'
import { SkeletonAnimeCarousel } from './SkeletonAnime'
import { cn } from '@/lib'
import { MonitorPlay, Star } from 'lucide-react'

export const UpcomingAnimeCarousel = () => {
	const { data: upcomingAnime, error, isLoading } = fetchSeasonsUpcoming()
	const isMobile = useMedia('(max-width:1024px)', false)
	if (isLoading && !isMobile) {
		return <SkeletonAnimeCarousel />
	}
	if (error) return <div>Error: {error.message}</div>
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
						<div className="group relative overflow-hidden flex-shrink-0 ">
							<Card>
								<CardContent className="cursor-pointer p-0 ">
									<Image
										src={anime.images.webp.image_url}
										alt={anime.title}
										width={0}
										height={0}
										sizes="100vw"
										className="w-full h-[200px] object-cover "
									/>
								</CardContent>
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
