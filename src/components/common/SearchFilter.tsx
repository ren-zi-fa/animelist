'use client'

import { Input } from '../ui'
import Image from 'next/image'
import { searchAnime } from '@/tanstack/SearchAnime'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { filterStore } from '@/store'
// import { useDebouncedInput } from '@/hook/useDebounceInput'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function SearchFilter() {
	const router = useRouter()
	const { debouncedQuery, setDebouncedQuery } = filterStore()
	const [queryKeyword, setQueryKeyword] = useState<string>('')
	const { data: dataSearch, isLoading, error } = searchAnime(debouncedQuery)

	// useDebouncedInput((value: string) => {
	// 	setDebouncedQuery(value)
	// }, 600)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim()
		setQueryKeyword(value)
	}
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedQuery(queryKeyword)
		}, 500)
		return () => {
			clearTimeout(timeout)
		}
	}, [queryKeyword])

	const handleLoading = () => {
		if (isLoading) {
			return <div className="loader-circle "></div>
		}
	}

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (debouncedQuery === '') return
		if (e.key === 'Enter' && debouncedQuery.trim()) {
			router.push(`/search/${debouncedQuery.trim()}`)
			setDebouncedQuery('')
		}
	}
	const handleClickSearch = (
		e: React.MouseEvent<SVGSVGElement, MouseEvent>
	) => {
		if (debouncedQuery === '') return
		e.preventDefault()
		router.push(`/search/${debouncedQuery.trim()}`)
		setDebouncedQuery('')
	}
	const handleClickNavigate = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		id: string
	) => {
		e.preventDefault()
		router.push(`/detail/${id}`)
		setDebouncedQuery('')
	}

	if (error) return <div>Error: {error.message}</div>

	const renderResult = () => {
		return dataSearch?.map((anime) => (
			<li key={anime.mal_id} className=" hover:bg-gray-100 cursor-pointer p-4 ">
				<div
					onClick={(e) => handleClickNavigate(e, anime.mal_id)}
					className="flex items-center gap-2"
				>
					<Image
						alt={anime.title}
						src={anime.images.webp.image_url}
						width={100}
						height={20}
						className="h-auto w-auto object-cover"
					/>
					<p> {anime.title}</p>
				</div>
			</li>
		))
	}

	return (
		<div className="w-1/2 lg:w-full mt-2 mx-auto">
			<div className="relative">
				<Input
					type="text"
					placeholder={`Search Anime... `}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					className="mb-4 "
				/>

				<Search
					className="absolute right-2 bottom-2 lg:right-2 lg:bottom-2 select-none cursor-pointer "
					onClick={handleClickSearch}
					width={20}
				/>
			</div>
			{handleLoading()}
			<ul className="bg-yellow-50 z-20 lg:top-14 max-w-lg mx-4 rounded shadow-md max-h-60 absolute lg:block lg:ms-80 left-4 lg:-left-5 overflow-y-auto">
				{renderResult()}
			</ul>
		</div>
	)
}
