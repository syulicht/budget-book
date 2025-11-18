import { useMutation } from "@tanstack/react-query"
import axios, { AxiosError } from "axios"
import type { AccountInfo } from "../../../types/types"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

export const useSignUp = () => {
    const navigate = useNavigate();
    const [errMsgs, setErrMsgs] = useState<string[]>([]);

    return {
        mutaion: useMutation({
                    mutationFn: async (data: AccountInfo) => {
                        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signup`, data);
                    },
                    onSuccess: () => {
                        navigate({
                            to: '/signin'
                        });
                    },
                    onError: (e) => {
                        console.error(e.message);
                        if(e instanceof AxiosError && e.response?.status === 400) {
                            setErrMsgs(e.response?.data.errors);
                        } else {
                            setErrMsgs([]);
                        }
                    }
                }),
        errMsgs: errMsgs
    };
}