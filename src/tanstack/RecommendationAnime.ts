import { useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib'
import { AnimeRecommendation, ApiResponseRecommendation } from './typeResponse'

export const fetchRecommendation = () => {
	return useQuery<AnimeRecommendation[]>({
		queryKey: ['fetchrecommendation'],
		queryFn: async (): Promise<AnimeRecommendation[]> => {
			const resultRandom: ApiResponseRecommendation<AnimeRecommendation[]> =
				await AxiosInstance.get('/recommendations/anime?page=1')
			return resultRandom.data.data
		}
	})
}
