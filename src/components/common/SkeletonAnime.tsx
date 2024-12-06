import React from 'react'
import { Skeleton } from '../ui'

export const SkeletonAnimeCarousel = () => (
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

export const SkeletonAnimeSchedule = () => (
	<div className="flex flex-col items-center justify-center gap-4">
		<div className="flex px-3">
			<Skeleton className="w-[100px] h-[150px] rounded-xl mb-2" />
			<div className="space-y-2 ml-4">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>
		</div>
		<div className="flex px-3">
			<Skeleton className="w-[100px] h-[150px] rounded-xl mb-2" />
			<div className="space-y-2 ml-4">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>
		</div>
		<div className="flex px-3">
			<Skeleton className="w-[100px] h-[150px] rounded-xl mb-2" />
			<div className="space-y-2 ml-4">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>
		</div>
		<div className="flex px-3">
			<Skeleton className="w-[100px] h-[150px] rounded-xl mb-2" />
			<div className="space-y-2 ml-4">
				<Skeleton className="h-4 w-[100px]" />
				<Skeleton className="h-4 w-[70px]" />
			</div>
		</div>
	</div>
)
