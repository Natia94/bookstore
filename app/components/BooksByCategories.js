import React, {Component} from 'react'
// import axios from 'axios'
import { Container, Col, Row } from 'reactstrap';
import Bookcard from './Bookcard';

export default class BooksByCategories extends Component {
    constructor () {
        super ()
        this.state = {
            books : [
                {
                    name: "Crime and Punishment1",
                    author: "Fyodot Dostoevsky1",
                    price: "15$"
                },
                {
                    name: "Crime and Punishment2",
                    author: "Fyodot Dostoevsky2",
                    price: "15$"
                },
                {
                    name: "Crime and Punishment3",
                    author: "Fyodot Dostoevsky3",
                    price: "15$"
                },
                {
                    name: "Crime and Punishment1",
                    author: "Fyodot Dostoevsky1",
                    price: "15$"
                },
                {
                    name: "Crime and Punishment2",
                    author: "Fyodot Dostoevsky2",
                    price: "15$"
                },
                {
                    name: "Crime and Punishment3",
                    author: "Fyodot Dostoevsky3",
                    price: "15$"
                }
            ]
        }
    }

    // async componentDidMount () {
    //     console.log ('hit didMount')
    //     const { match: { params } } = this.props;
    //     console.log('params', params)
    //     const response = await axios.get(`/lalala/${params.romance}`)
    //     books = response.data
    // }

    render () {
        let booksCards = this.state.books.map(book => {
            return (
                <Col md='3'>
                    <Bookcard books = {book}/>
                </Col>
            )
        })
        return (
            <Container fluid> 
            <Row>
                {booksCards}
            </Row>
            </Container>
        )
    }
}