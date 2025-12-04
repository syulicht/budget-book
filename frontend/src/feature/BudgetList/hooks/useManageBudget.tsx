import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { budgetMasterKey } from "../../../utils/queryKeyFactory";
import authAxios from "../../../utils/authAxios";
import type { Master } from "../../../types/types";

export const useManageBudget = () => {
    const { data, isLoading } = useQuery({
        queryKey: budgetMasterKey(),
        queryFn: async() => {
            return (await authAxios.get<Master[]>('/getAllMasters')).data;
        }
    });
    const exInTypesNames = [{value: -1, name: '収入・支出'}, {value: 0, name: '収入'}, {value: 1, name: '支出'}];

    const [exInType, setExInType] = useState(-1);
    const [master, setMaster] = useState(-1);
    const masters = [{value: -1, name: 'すべて'}];
    if(data) {
        data.forEach(item => masters.push({value: item.id, name: item.name}));
    }

    return {exInTypesNames: exInTypesNames, masters: masters, masterIsLoading: isLoading, exInType: exInType, setExInType: setExInType, setMaster: setMaster, master: master};
}