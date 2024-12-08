import { AxiosInstance } from '@/lib'
import { useQuery } from '@tanstack/react-query'
import { ApiResponse, Anime } from './typeResponse'

export const fetchTopAnime = () => {
	return useQuery<Anime[]>({
		queryKey: ['fetchtopAnime'],
		queryFn: async (): Promise<Anime[]> => {
			const dataTopAnime: ApiResponse<Anime[]> = await AxiosInstance.get(
				'/top/anime?limit=10'
			)
			return dataTopAnime.data.data
		}
	})
}
