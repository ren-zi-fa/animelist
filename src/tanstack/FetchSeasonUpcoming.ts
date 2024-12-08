import { useQuery } from '@tanstack/react-query'
import { AxiosInstance } from '@/lib'
import { ApiResponse, Anime } from './typeResponse'

export const fetchSeasonsUpcoming = () => {
	return useQuery<Anime[]>({
		queryKey: ['fetchupcoming'],
		queryFn: async (): Promise<Anime[]> => {
			const dataSeasonUpcoming: ApiResponse<Anime[]> =
				await AxiosInstance.get('/seasons/upcoming')
			return dataSeasonUpcoming.data.data
		}
	})
}
