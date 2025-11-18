import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material"
import type { AccountInfo } from "../types/types"
import { useState } from "react";

interface Props {
    handler: (data: AccountInfo) => void
    errMsgs: string[]
}

const AccountForm = (props: Props) => {
  const [data, setData] = useState<AccountInfo>({email: '', password: ''});

  return (
    <FormGroup>
        <FormControl>
            <InputLabel htmlFor='email'>E-Mail</InputLabel>
            <Input id="email" type="email" onChange={(e) => setData({...data, email: e.target.value})} value={data.email} />
        </FormControl>
        <FormControl>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input id="password" type="password" onChange={(e) => setData({...data, password: e.target.value})} value={data.password} />
        </FormControl>
        {
          props.errMsgs.map(errMsg => {
            return <Typography component={'p'} color="error">{errMsg}</Typography>
          })
        }
        <Button onClick={() => props.handler(data)}>Submit</Button>
    </FormGroup>
  )
}

export default AccountForm