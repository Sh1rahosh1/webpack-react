import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.scss'
import Test1 from './test1';

class App extends React.Component {
    render() {
        return <div className='test'>
            <Test1></Test1>
            <Button>确定</Button>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
