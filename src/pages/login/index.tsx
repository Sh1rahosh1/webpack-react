import { Button } from 'antd';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Login: React.FC<RouteComponentProps> = (props) => {
    return (
        <div>
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
