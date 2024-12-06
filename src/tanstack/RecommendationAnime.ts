import { useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib'
import {  AnimeRecommendation, ApiResponseRecommendation } from './typeResponse'

export const fetchRecommendation = () => {
	return useQuery<AnimeRecommendation[]>({
		queryKey: ['fetch.recommendation'],
		queryFn: async (): Promise<AnimeRecommendation[]> => {
			const resultRandom: ApiResponseRecommendation<AnimeRecommendation[]> =
				await AxiosInstance.get('/recommendations/anime')
			return resultRandom.data.data
		}
	})
}
