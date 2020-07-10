import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Card from './components/Card'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Natia!!!</h1>
                <Card />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))