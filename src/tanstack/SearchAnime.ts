import { AxiosInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Anime } from "./typeResponse";

export const searchAnime = (query: string) => {
    return useQuery<Anime[]>({
        queryKey: ['fetch.search', query],
        queryFn: async (): Promise<Anime[]> => {
            const response:ApiResponse<Anime[]> = await AxiosInstance.get(`anime`, {
                params: { q: query, limit: 10 },
            });
            return response.data.data;
        },
        enabled: !!query, 
    });
};
