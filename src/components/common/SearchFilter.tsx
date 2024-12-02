'use client'

import { useState } from 'react'
import { searchAnime } from '@/utils/jikanApi'
import { Input } from '../ui'
import Link from 'next/link'
import Image from 'next/image'

interface Results {
	mal_id: string
	title: string
	images: Images
}
interface ImageUrls {
	image_url: string
}

interface Images {
	jpg: ImageUrls
	webp: ImageUrls
}

export function SearchFilter() {
	const [query, setQuery] = useState<string>('')
	const [results, setResults] = useState<Results[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)

		if (value.trim() === '') {
			setResults([])
			return <div className="">kosong</div>
		}
	
		if (value.length > 3) {
			try {
				setIsLoading(true)
				const data = await searchAnime(value)
				setResults(data)
				setIsLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		} else if (value.length == 1) {
			setResults([])
		}
	}

	return (
		<div className="w-1/2 lg:w-full mt-2 mx-auto">
			<Input
				type="text"
				placeholder={`Search Anime... ${isLoading?'....':''}`}
				value={query}
				onChange={handleSearch}
				className="mb-4"
			/>
			<ul className="bg-yellow-50 z-20 lg:top-14 max-w-lg mx-4 rounded shadow-md max-h-60 absolute lg:block lg:ms-80 left-4 lg:left-0 overflow-y-auto">
				{results.map((anime) => (
					<li
						key={anime.mal_id}
						className=" hover:bg-gray-100 cursor-pointer flex items-center p-4 "
					>
						<Link href={`detail/${anime.mal_id}`} className="px-2">
							<Image
								alt={anime.title}
								src={anime.images.webp.image_url}
								width={100}
								height={20}
							/>
						</Link>
						<p> {anime.title}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
