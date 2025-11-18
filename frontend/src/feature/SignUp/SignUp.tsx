import AccountForm from "../../ui/AccountForm"
import { useSignUp } from "./hooks/useSignUp"
import type { AccountInfo } from "../../types/types";

const SignUp = () => {
    const mutaion = useSignUp();
    const handler = (data: AccountInfo) => {
        mutaion.mutate(data);
    }
    return (
        <AccountForm handler={handler} />
    )
}

export default SignUp;