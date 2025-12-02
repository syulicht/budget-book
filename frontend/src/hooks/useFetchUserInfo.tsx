import { useQuery } from "@tanstack/react-query"
import { userKey } from "../utils/queryKeyFactory";
import authAxios from "../utils/authAxios";
import type { UserInfo } from "../types/types";
export const useFetchUserInfo = () => {
    const {data, isLoading, error, isSuccess} = useQuery({
        queryKey: [userKey],
        queryFn: async() => {
            const user = (await authAxios.get<UserInfo>('/getUser')).data;
            return user;
        }
    });

    return {data: data, isLoading: isLoading, error: error, isSuccess: isSuccess};
}