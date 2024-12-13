import { fetchTopAnime } from '@/tanstack'
import Image from 'next/image'
import React from 'react'
import { SkeletonAnimeList } from './skeleton/SkeletonAnime'
import { useMedia } from 'react-use'

export const TopAnimeMobile = () => {
  const { data: anime, isLoading, error } = fetchTopAnime()
  const isMobile = useMedia('(max-width:1024px)', false)

    if (error) return <div>Error: {error.message}</div>
    if (isLoading && isMobile) {
        return <SkeletonAnimeList />
    }
  
    return (
        <div className="flex flex-col items-center justify-center px-4">
            <div className="w-full px-2 h-auto p-2 bg-white font-semibold">
                Top Anime
            </div>
            {anime?.map((anime, index) => (
                <div
                    className="py-2 bg-violet-900 w-full px-2 text-white "
                    key={anime.mal_id}
                >
                    <div className="flex">
                        <div className="font-bold text-xl mr-2">{index + 1}</div>
                        <Image
                            alt={anime.title}
                            width={60}
                            height={20}
                            src={anime.images.webp.image_url}
                        />
                        <div className="text-sm ml-2">
                            <p className="">{anime.title}</p>
                            <p className="text-yellow-300 text-xs">
                                {anime.broadcast.day}{' '} {anime.broadcast.time}
                            </p>
                            <p className="text-gray-300 text-xs">
                               Episodes: {anime.episodes}
                            </p>
                            <p className="text-gray-300 text-xs">
                               Rating: {anime.score}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

