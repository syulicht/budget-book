import { useQuery } from "@tanstack/react-query";
import { budgetListKey } from "../utils/queryKeyFactory";
import authAxios from "../utils/authAxios";
import type { Budget } from "../types/types";

export const useFetchBudgetData = (start: Date, end: Date, exInType: number, master: number, ) => {
    const startString = start.toISOString();
    const endString = end.toISOString();
    const {data, isLoading} = useQuery({
        queryKey: budgetListKey([String(exInType), String(master), String(startString), String(endString)]),
        queryFn: async() => {
            return (await authAxios.get<Budget[]>(`/getBudgetData/${startString}/${endString}/${exInType}/${master}`)).data;
        }
    })

    return {data, isLoading};
}