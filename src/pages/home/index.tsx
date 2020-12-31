import { Button } from 'antd';
import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import useLogin from '../../useStore/useLogin';


const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <div>
            <div>
                <Button onClick={() => {
                    props.history.push({
                        pathname: '/home/home1'
                    })
                }}>home1</Button>
                <Button onClick={() => {
                    props.history.push({
                        pathname: '/home/home2'
                    })
                }}>home2</Button>
                <Button onClick={() => {
                    props.history.push({
                        pathname: '/login'
                    })
                }}>login</Button>
            </div>
            <div>
                <Route exact path='/home/home1' component={Home1} />
                <Route exact path='/home/home2' component={Home2} />
            </div>
        </div>
    )
}

const Home1: React.FC<RouteComponentProps> = () => {
    const { name } = useLogin();
    return (
        <div>home1,welcome {name}</div>
    )
}

const Home2: React.FC<RouteComponentProps> = () => {
    return (
        <div>home2</div>
    )
}

export default Home