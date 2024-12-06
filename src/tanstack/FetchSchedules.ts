import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "@/lib";
import { ApiResponse, Anime } from "./typeResponse";

export const fetchSchedules = () => {
    return useQuery<Anime[]>({
        queryKey:['fetch.schedules'],
        queryFn:async (): Promise<Anime[]> => {
            const dataSchedules: ApiResponse<Anime[]> = await AxiosInstance.get("/seasons/now?limit=5");
            return dataSchedules.data.data;
          },
    })
  };