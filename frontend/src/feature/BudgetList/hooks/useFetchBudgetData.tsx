import { useQuery } from "@tanstack/react-query";
import authAxios from "../../../utils/authAxios";
import { budgetListKey } from "../../../utils/queryKeyFactory";

export const useFetchBudgetData = (exInType: number, master: number, ) => {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const {data, isLoading} = useQuery({
        queryKey: budgetListKey([String(exInType), String(master)]),
        queryFn: async() => {
            return (await authAxios.get(`/getBudgetData/${monthStart}/${monthEnd}/${exInType}/${master}`)).data;
        }
    })

    return {data, isLoading};
}