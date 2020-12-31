import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux'
import store from './store';
import './index.scss'

class App extends React.Component {
    render() {
        return <Provider store={store}>
            <Router />
        </Provider>

    }
}
ReactDOM.render(<App />, document.getElementById('root'))
