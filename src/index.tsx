import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import Router from './router';
class App extends React.Component {
    render() {
        return <div>
            <Router />
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('root'))
