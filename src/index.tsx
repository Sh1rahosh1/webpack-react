import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import './index.scss'

class App extends React.Component {
    render() {
        return <div className='test'>
            <Button>确定</Button>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
