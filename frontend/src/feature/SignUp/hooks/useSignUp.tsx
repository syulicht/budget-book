import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import type { AccountInfo } from "../../../types/types"
import { useNavigate } from "@tanstack/react-router"

export const useSignUp = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: AccountInfo) => {
            console.log(`${import.meta.env.VITE_API_BASE_URL}/signup`);
            return axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`, data)
        },
        onSuccess: () => {
            navigate({
                to: '/'
            });
        }
    });
}