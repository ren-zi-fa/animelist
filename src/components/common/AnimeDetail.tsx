'use client'
import { Anime, FetchAnimeById } from '@/tanstack'
import Image from 'next/image'
import React from 'react'
import { useMedia } from 'react-use'
import { YoutubePlayer } from './YoutubePlayer'
import { TopAnimeMobile } from './TopAnimeMobile'

export const AnimeDetail = ({ query }: { query: string }) => {
	const { data: details, isLoading } = FetchAnimeById(query)
	const isMobile = useMedia('(max-width:1024px)', false)
	if (isLoading) {
		return <div className="loader-circle"></div>
	}
	const renderDetailsDesktop = () => {
		if (!details) return null
		return Object.values(details).map((detail: Anime, index) => (
			<div key={`${detail.mal_id}-${index}`} className="">
				<div className="text-xl font-bold text-white px-4 py-2 border-b-[1px]">
					{detail.title}
				</div>
				<div className="grid grid-cols-6 ">
					<div className="col-span-2 py-2 flex justify-center mr-10 border-r-[1px]">
						<Image
							src={detail.images.webp.image_url}
							alt={detail.title}
							width={280}
							height={100}
							className="h-auto w-auto"
						/>
					</div>
					<div className="lg:col-span-4 px-4">
						<div className="flex mt-4 border-[1px] py-3 w-auto">
							<div className="text-center px-4  border-r-[1px]">
								<p className="px-3 bg-gray-600 text-white font-semibold text-sm uppercase">
									Score
								</p>
								<h2>{detail.score}</h2>
								<h5>{detail.members} members</h5>
							</div>
							<div className=" px-4  border-r-[1px]">
								<h2 className="text-center items-center mt-4">
									Ranked{' '}
									<span className="font-bold text-white">#{detail.rank}</span>
								</h2>
							</div>
							<div className=" px-4  border-r-[1px]">
								<h2 className="text-center items-center mt-4">
									Popularity{' '}
									<span className="font-bold text-white">
										#{detail.popularity}
									</span>
								</h2>
							</div>
							<div className=" px-2 border-r-[1px] ">
								<h1 className="text-center items-center mt-4">
									{detail.rating}
								</h1>
							</div>
							<div className=" px-1 ">
								<h1 className="text-center items-center mt-4">
									{detail.status}
								</h1>
							</div>
						</div>
						<h1 className=" text-white border-b-[1px] mt-4">Synopsis</h1>
						<p>{detail.synopsis}</p>
					</div>
				</div>
				<div className="mt-5 flex justify-center py-2">
					<YoutubePlayer
						videoId={detail.trailer.youtube_id}
						height="400"
						width="800"
					/>
				</div>
			</div>
		))
	}
	const renderDetailsMobile = () => {
		if (!details) return null
		return Object.values(details).map((detail: Anime, index) => (
			<div key={`${detail.mal_id}-${index}`} className=" p-0 text-white">
				<div className=" bg-violet-500 text-center rounded-md mb-4">
					<p className="p-4  text-xl">{detail.title}</p>
				</div>
				<Image
					src={detail.images.webp.image_url}
					width={200}
					height={70}
					alt={detail.title}
					priority
					className="mx-auto mb-4 h-auto w-auto"
				/>
				<div className="">
					<table>
						<tbody>
							<tr>
								<td>Title </td>
								<td> :</td>
								<td>{detail.title}</td>
							</tr>
							<tr>
								<td>Score</td>
								<td>:</td>
								<td>{detail.score}</td>
							</tr>
							<tr>
								<td>Members</td>
								<td>:</td>
								<td>{detail.members}</td>
							</tr>
							<tr>
								<td>Rating</td>
								<td>:</td>
								<td>{detail.rating}</td>
							</tr>
							<tr>
								<td>Popularity</td>
								<td>:</td>
								<td>{detail.members}</td>
							</tr>
						</tbody>
					</table>
					<p className="font-sans text-yellow-400 my-3 text-2xl text-center">
						synopsis
					</p>
					<p>{detail.synopsis}</p>
					<div className="mt-5 py-2 flex justify-center">
						<YoutubePlayer
							videoId={detail.trailer.youtube_id}
							height="200"
							width="360"
						/>
					</div>
					.
					<TopAnimeMobile />
				</div>
			</div>
		))
	}

	const whichRender = () => {
		if (!isMobile) {
			return renderDetailsDesktop()
		}
		return renderDetailsMobile()
	}
	return <div className="h-full">{whichRender()}</div>
}
