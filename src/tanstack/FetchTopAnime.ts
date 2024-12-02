import { AxiosInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse, TopAnime } from "./typeResponse";



export const fetchTopAnime = () => {
    return useQuery<TopAnime[]>({
        queryKey:['fetch.topAnime'],
        queryFn:async (): Promise<TopAnime[]> => {
            const dataTopAnime: ApiResponse<TopAnime[]> = await AxiosInstance.get("/top/anime?limit=10");
            return dataTopAnime.data.data;
          },
    })
  };