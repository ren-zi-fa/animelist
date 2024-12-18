import { useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib'
import { Anime, ApiResponse } from './typeResponse'

export const fetchRecommendation = () => {
	return useQuery<Anime[]>({
		queryKey: ['fetchrecommendation'],
		queryFn: async (): Promise<Anime[]> => {
			const resultRandom: ApiResponse<Anime[]> = await AxiosInstance.get(
				'/top/anime?limit=10'
			)
			return resultRandom.data.data
		}
	})
}
