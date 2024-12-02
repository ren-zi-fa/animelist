import axios from 'axios'

export const searchAnime = async (query: string) => {
	const response = await axios.get(`https://api.jikan.moe/v4/anime`, {
		params: { q: query, limit: 10 }
	})
	return response.data.data
}
