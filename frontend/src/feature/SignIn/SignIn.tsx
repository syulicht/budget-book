import type { AccountInfo } from "../../types/types";
import AccountForm from "../../ui/AccountForm"
import { useSignIn } from "./hooks/useSignIn"

const SignIn = () => {
  const { mutaion, errMsgs } = useSignIn();
  const handler = (data: AccountInfo) => {
    mutaion.mutate(data);
  }
  return (
    <AccountForm handler={handler} errMsgs={errMsgs} />
  )
}

export default SignIn