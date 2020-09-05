import React from 'react'
import Bookcard from './Bookcard'
import { Container, Col, Row } from 'reactstrap';
// import Axios from 'axios';

class Appdata extends React.Component {
    constructor(props){
        super (props)
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
                    description: "lalalallal2"
                },
                {
                    name: "Crime and Punishment3",
                    author: "Fyodot Dostoevsky3",
                    price: "15$"
                }
            ]
        }
    }

    componentDidMount () {
        // Axios.get (`/api/allBooks`).then(res => {
        //     console.log(res)
        //     // this.setState({
        //     //     book : res.data
        //     // })
        // }) 
    }


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

export default Appdata;
