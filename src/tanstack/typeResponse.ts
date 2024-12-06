export interface Anime {
	mal_id: string
	title: string
	images: Images
	broadcast: Broadcast
	synopsis: string
	score: string
	members: string
	rank: string
	popularity: string
	rating: string
	streaming: Streaming[]
	status: string
}
export interface AnimeRecommendation {
	mal_id: string
	entry: Entry[]
}
export interface ApiResponseRecommendation<T> {
	data: {
		data:T
	}
}
type Entry = {
	mal_id: string
	title: string
	images: Images
}


interface Images {
	webp: ImageUrl
}

interface ImageUrl {
	image_url: string
}
interface Broadcast {
	day: string
	time: string
	string: string
}

type Streaming = {
	name: string
	url: string
}

export interface ApiResponse<T> {
	data: {
		data: T
	}
}

export interface ApiResponseById<T> {
	data: T
}
