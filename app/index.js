import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Post from './components/Post'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Natia!!!</h1>
                <Post />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))