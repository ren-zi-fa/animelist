import { AxiosInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse, TopAnime } from "./typeResponse";

export const searchAnime = (query: string) => {
    return useQuery<TopAnime[]>({
        queryKey: ['fetch.topAnime', query],
        queryFn: async (): Promise<TopAnime[]> => {
            const response:ApiResponse<TopAnime[]> = await AxiosInstance.get(`anime`, {
                params: { q: query, limit: 10 },
            });
            return response.data.data;
        },
        enabled: !!query, 
    });
};
