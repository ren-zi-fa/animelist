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
	episodes: string
	trailer: Trailer
	genres: Genre[]
}
type Genre = {
	type: string
	name: string
}
export type Trailer = {
	url: string
	embed_url: string
	name: string
	youtube_id: string
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
