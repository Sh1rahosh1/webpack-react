import { Button, Input } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useLogin from '../../useStore/useLogin';

const Login: React.FC<RouteComponentProps> = (props) => {
    const { name, setUserName } = useLogin();
    return (
        <div>
            <Input value={name} onChange={(e) => { setUserName(e.target.value) }} />
            <Button onClick={() => {
                props.history.push({
                    pathname: 'home',
                    state: {
                        id: 1
                    }
                })
            }}>Login</Button>
        </div>
    )
}

export default Login
