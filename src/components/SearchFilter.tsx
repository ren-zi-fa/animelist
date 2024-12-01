'use client'

import { useState } from 'react'
import { searchAnime } from '@/utils/jikanApi'
import { Input } from './ui'
import Link from 'next/link'

export default function SearchFilter() {
	const [query, setQuery] = useState<string>('')
	const [results, setResults] = useState<any[]>([])

	const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)
        
		if (value.trim() === '') {
            setResults([])
			return <div className="">kosong</div>
		}
        if (value.length > 3){
            try {
                const data = await searchAnime(value)
                setResults(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }

        }

	}

	return (
		<div className="w-full max-w-md mx-auto">
			<Input
				type="text"
				placeholder="Search Anime..."
				value={query}
				onChange={handleSearch}
				className="mb-4"
			/>
			<ul className="bg-white border rounded shadow-md max-h-60 overflow-y-auto">
				{results.map((anime) => (
					<li
						key={anime.mal_id}
						className="p-2 hover:bg-gray-100 cursor-pointer flex"
					>
						<Link href={`detail/${anime.mal_id}`}>
							<img
								src={anime.images.webp.image_url}
								alt=""
								className="w-24 h-14"
							/>
						</Link>
						<p> {anime.title}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
