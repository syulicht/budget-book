import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router"
import type { AccountInfo } from "../../../types/types";
import axios from "axios";

export const useSignIn = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (data: AccountInfo) => {
        }
    })
}