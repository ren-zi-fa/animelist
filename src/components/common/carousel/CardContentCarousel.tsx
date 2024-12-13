import React from 'react'
import { CardContent } from '../../ui'
import Image from 'next/image'

interface Anime {
	title: string
	images: {
		webp: {
			image_url: string
		}
	}
}

interface CardContentCarouselProps {
	anime: Anime
}

const CardContentCarousel: React.FC<CardContentCarouselProps> = ({anime}) => {
	return (
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
	)
}

export default CardContentCarousel
