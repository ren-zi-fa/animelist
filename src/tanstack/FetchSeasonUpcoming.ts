import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "@/lib";
import { ApiResponse, TopAnime } from "./typeResponse";

export const fetchSeasonsUpcoming = () => {
    return useQuery<TopAnime[]>({
        queryKey:['fetch.upcoming'],
        queryFn:async (): Promise<TopAnime[]> => {
            const dataSeasonUpcoming: ApiResponse<TopAnime[]> = await AxiosInstance.get("/seasons/upcoming");
            return dataSeasonUpcoming.data.data;
          },
    })
  };