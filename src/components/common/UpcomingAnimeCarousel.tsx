import { fetchSeasonsUpcoming } from '@/tanstack/FetchSeasonUpcoming'
import React from 'react'
import {
	Card,
	CardContent,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Skeleton
} from '../ui'
import Image from 'next/image'
import { useMedia } from 'react-use'

export const UpcomingAnimeCarousel = () => {
	const { data: upcomingAnime, error, isLoading } = fetchSeasonsUpcoming()
	const isMobile = useMedia('(max-width:1024px)', false)
	if (isLoading && !isMobile) {
		return (
			<div className="flex items-center justify-center gap-4">
				<div className="">
					<Skeleton className="w-full h-[200px] rounded-xl mb-2" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[160px]" />
					</div>
				</div>
				<div className="">
					<Skeleton className="w-full h-[200px] rounded-xl mb-2" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[160px]" />
					</div>
				</div>
				<div className="">
					<Skeleton className="w-full h-[200px] rounded-xl mb-2" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[160px]" />
					</div>
				</div>
			</div>
		)
	} else if (isLoading && isMobile) {
		return (
			<div className="flex items-center justify-center gap-4">
				<div className="">
					<Skeleton className="w-full h-[200px] rounded-xl mb-2" />
					<div className="space-y-2">
						<Skeleton className="h-4 w-[200px]" />
						<Skeleton className="h-4 w-[160px]" />
					</div>
				</div>
			</div>
		)
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
						className="md:basis-1/2 lg:basis-1/4 "
					>
						<div className=" card overflow-hidden rounded-md flex-shrink-0 select-none cursor-pointer ">
							<Card>
								<CardContent className="flex items-center justify-center p-0 bg-violet-500">
									<Image
										src={anime.images.webp.image_url}
										alt={anime.title}
										width={0}
										height={0}
										sizes="100vw"
										className="w-full h-[200px] object-cover  "
									/>
								</CardContent>
								<div className="card-details">
									<h4 className="text-xl text-center text-gray-200">
										{anime.title}
									</h4>
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
