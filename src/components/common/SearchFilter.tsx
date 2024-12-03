'use client'

import { useEffect, useMemo, useState } from 'react'

import { Input } from '../ui'
import Link from 'next/link'
import Image from 'next/image'
import { searchAnime } from '@/tanstack/SearchAnime'

export function SearchFilter() {
	const debounce = require('lodash.debounce')
	const [query, setQuery] = useState<string>('')
	const [debouncedQuery, setDebouncedQuery] = useState<string>('')

	const { data: dataSearch, isLoading, isError } = searchAnime(debouncedQuery)

	const debouncedSetQuery = useMemo(
		() =>
			debounce((value: string) => {
				setDebouncedQuery(value)
			}, 300),
		[]
	)

	useEffect(() => {
		return () => {
			debouncedSetQuery.cancel()
		}
	}, [debouncedSetQuery])

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setQuery(value)
		debouncedSetQuery(value)
	}

	const handleLoading = () => {
		if (isLoading) {
			return <div className="loader-circle "></div>
		}
	}
	return (
		<div className="w-1/2 lg:w-full mt-2 mx-auto">
			<Input
				type="text"
				placeholder={`Search Anime... `}
				value={query}
				onChange={handleInputChange}
				className="mb-4"
			/>
			{handleLoading()}
			<ul className="bg-yellow-50 z-20 lg:top-14 max-w-lg mx-4 rounded shadow-md max-h-60 absolute lg:block lg:ms-80 left-4 lg:-left-5 overflow-y-auto">
				{dataSearch?.map((anime) => (
					<li
						key={anime.mal_id}
						className=" hover:bg-gray-100 cursor-pointer p-4 "
					>
						<Link
							href={`detail/${anime.mal_id}`}
							className="px-2 flex items-center "
						>
							<Image
								alt={anime.title}
								src={anime.images.webp.image_url}
								width={100}
								height={20}
								className="h-auto w-auto"
							/>
							<p> {anime.title}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
