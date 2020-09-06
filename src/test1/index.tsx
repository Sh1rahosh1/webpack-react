import React from 'react';
import { Button } from 'antd';

export default class Test1 extends React.Component<any, any>{
    constructor(prop) {
        super(prop);
        this.state = {
            count: 1
        }

    }
    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>1</Button>
                <Button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>2</Button>
                <div className='testDiv'>{this.state.count}</div>
            </div>
        )
    }
}