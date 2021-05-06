import { Button, Input } from 'antd';
import React, { useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useLogin from '../../useStore/useLogin';

const Login: React.FC<RouteComponentProps> = (props) => {
    // const { name, setUserName } = useLogin();
    // return (
    //     <div>
    //         <Input value={name} onChange={(e) => { setUserName(e.target.value) }} />
    //         <Button onClick={() => {
    //             props.history.push({
    //                 pathname: 'home',
    //                 state: {
    //                     id: 1
    //                 }
    //             })
    //         }}>Login</Button>
    //     </div>
    // )

    const mainDivRef = useRef<HTMLDivElement>(null)
    const subDivRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setTimeout(() => {
            mainDivRef.current?.addEventListener('click', (e) => {
                console.log('main native event')
            })
            subDivRef.current?.addEventListener('click', (e) => {
                console.log('sub native event')
            })
            subDivRef.current?.addEventListener('hello', (e) => {
                console.log(e)
                console.log((e as CustomEvent).detail)
            })
        }, 1000)
        setTimeout(() => {
            subDivRef.current?.dispatchEvent(new Event('click', { bubbles: true }))
            subDivRef.current?.dispatchEvent(new CustomEvent<{ text: string }>('hello', { bubbles: true, detail: { text: 'hello' } }))
        }, 2000)
    }, [])
    return <div
        style={{ width: 100, height: 100, backgroundColor: 'red' }}
        ref={mainDivRef}
        onClick={(e) => {
            console.log('main react event')
        }}
    >
        <div
            style={{ width: 50, height: 50, backgroundColor: 'blue' }}
            ref={subDivRef}
            onClick={(e) => {
                console.log('sub react event')
            }}
        >
        </div>
    </div>
}

export default Login
