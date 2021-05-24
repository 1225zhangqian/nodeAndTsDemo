import React, { useState } from 'react'

interface AccountInfoType {
    account: string
    password: string
}
export const Login: React.FunctionComponent = () => {
    const [accountInfo, setAccount] = useState<AccountInfoType>({ account: '', password: '' })
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setAccount({ ...accountInfo, [name]: value })
    }

    return <div>
        <label>
            账号：
            <input name="account" value={accountInfo.account} onChange={onInputChange} />
        </label>
        <br />
        <label>
            密码：
            <input name="password" value={accountInfo.password} onChange={onInputChange} />
        </label>
        <br />
        <button>Login</button>
    </div>
}