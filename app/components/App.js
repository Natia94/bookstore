import React, {Component} from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Appdata from './Appdata'
import Carousel from './Carousel'
import Navbar from './Navbar'
import BooksByCategories from './BooksByCategories'
import Login from './Login'


class App extends Component {
    constructor(props){
        super (props)
    }
    
    render () {
        return (
            <Router>
                <Container fluid >
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Carousel} />
                    <Route exact path='/getAllbooks' component={Appdata} />

                    <Route exact path='/UserAccount' component={Login} />

                    <Route exact path='/:science' component={BooksByCategories} />
                    <Route exact path='/:fiction' component={BooksByCategories} />
                    <Route exact path='/:romance' component={BooksByCategories} />
                    <Route exact path='/:novel' component={BooksByCategories} />
                    <Route exact path='/:narative' component={BooksByCategories} />
                    <Route exact path='/:mystery' component={BooksByCategories} />
                    <Route exact path='/:fantasy' component={BooksByCategories} />
                    
                </Switch> 
                </Container>
            </Router>
        )
    }
}

export default App;