import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router"
import type { AccountInfo } from "../../../types/types";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const useSignIn = () => {
    const navigate = useNavigate();
    const [errMsgs, setErrMsgs] = useState<string[]>([]);

    return {
        mutaion: useMutation({
                    mutationFn: async (data: AccountInfo) => {
                        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/signin`, data);
                    },
                    onSuccess: (res) => {
                        localStorage.setItem('token', res.data.token);
                        navigate({ to: '/' });
                    },
                    onError: (e) => {
                        console.error(e.message);
                        if(e instanceof AxiosError && e.response?.status === 400) {
                            setErrMsgs(e.response?.data.errors);
                        } else if(e instanceof AxiosError && e.response?.status === 401) {
                            setErrMsgs([e.response.data.message]);
                        } else if(e instanceof AxiosError && e.response?.status === 404) {
                            setErrMsgs([e.response.data.message]);
                        } else {
                            setErrMsgs([]);
                        }
                    }
                }),
        errMsgs: errMsgs
    };
}