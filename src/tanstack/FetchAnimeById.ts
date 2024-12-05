import { useQuery } from '@tanstack/react-query'
import { ApiResponseById,Anime } from './typeResponse'
import { AxiosInstance } from '@/lib'

export const FetchAnimeById = (query: string) => {
	return useQuery<Anime[]>({
		queryKey: ['fetch.byId', query],
		queryFn: async (): Promise<Anime[]> => {
			const results: ApiResponseById<Anime[]> = await AxiosInstance.get(
				`anime/${query}/full?limit=10`
			)
			return results.data
		},
        enabled: !!query, 
	})
}
