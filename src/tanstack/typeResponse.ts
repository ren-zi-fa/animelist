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
