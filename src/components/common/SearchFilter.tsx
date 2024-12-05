'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import { Input } from '../ui'
import Link from 'next/link'
import Image from 'next/image'
import { searchAnime } from '@/tanstack/SearchAnime'
import { redirect, usePathname, useRouter } from 'next/navigation'

export function SearchFilter() {
	const router = useRouter()
	const pathname = usePathname()
	const debounce = require('lodash.debounce')
	const [debouncedQuery, setDebouncedQuery] = useState<string>('')
	const { data: dataSearch, isLoading, error } = searchAnime(debouncedQuery)

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
		debouncedSetQuery(value)
	}

	const handleLoading = () => {
		if (isLoading) {
			return <div className="loader-circle "></div>
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && debouncedQuery.trim()) {
			router.push(`/search/${debouncedQuery.trim()}`)
			setDebouncedQuery('')
		}
	}

	if (error) return <div>Error: {error.message}</div>

	const renderResult = () => {
		return dataSearch?.map((anime) => (
			<li key={anime.mal_id} className=" hover:bg-gray-100 cursor-pointer p-4 ">
				<a href={`/detail/${anime.mal_id}`} className="flex items-center gap-2">
					<Image
						alt={anime.title}
						src={anime.images.webp.image_url}
						width={100}
						height={20}
						className="h-auto w-auto object-cover"
					/>
					<p> {anime.title}</p>
				</a>
			</li>
		))
	}

	return (
		<div className="w-1/2 lg:w-full mt-2 mx-auto">
			<Input
				type="text"
				placeholder={`Search Anime... `}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				className="mb-4"
			/>
			{handleLoading()}
			<ul className="bg-yellow-50 z-20 lg:top-14 max-w-lg mx-4 rounded shadow-md max-h-60 absolute lg:block lg:ms-80 left-4 lg:-left-5 overflow-y-auto">
				{renderResult()}
			</ul>
		</div>
	)
}
