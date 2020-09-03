import React, {Component} from 'react';
import Navbar from './Navbar'

import Carousel from './Carousel'
import Bookcard from './Bookcard'

import { Row, Col, Container } from 'reactstrap';

class App extends Component {
    constructor(props){
        super (props)
        this.state = {
            books : [
                {
                    name: "Crime and Punishment1",
                    author: "Fyodot Dostoevsky1",
                    description: "lalalallal1"
                },
                {
                    name: "Crime and Punishment2",
                    author: "Fyodot Dostoevsky2",
                    description: "lalalallal2"
                },
                {
                    name: "Crime and Punishment3",
                    author: "Fyodot Dostoevsky3",
                    description: "lalalallal3"
                },
                {
                    name: "Crime and Punishment1",
                    author: "Fyodot Dostoevsky1",
                    description: "lalalallal1"
                },
                {
                    name: "Crime and Punishment2",
                    author: "Fyodot Dostoevsky2",
                    description: "lalalallal2"
                },
                {
                    name: "Crime and Punishment3",
                    author: "Fyodot Dostoevsky3",
                    description: "lalalallal3"
                }
            ]
        }
    }
    render () {
        let booksCards = this.state.books.map(book => {
            return (
                <Col md = '4'>
                    <Bookcard books = {book}/>
                </Col>
            )
        })
        return (
            <Container fluid> 
                <Navbar />
                <Carousel />
                <Row>
                    {booksCards}
                </Row>
            </Container>
        )
    }
}

export default App;