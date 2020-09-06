import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import  { Link } from 'react-router-dom'

class Login extends Component {
    constructor (props){
        super (props)
        this.state = {
            email: "",
            password : "",
            password_confirmation : ""
        }
    }
    render () {
       
        return (
            <div>
                <Row xs ='3'>
                    <Col></Col>
                    <Col>
                        <Form>

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="Password" id="examplePassword" placeholder="Type Password" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="examplePassword"> Repeat Password</Label>
                            <Input type="password" name="Repeat Password" id="examplePassword" placeholder="Repat Password" />
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" /> {' '}
                            I'm not a robot
                            </Label>
                        </FormGroup>

                        <FormText color="muted">
                            Do not have a account? <Link to="/">Sign up!</Link>
                        </FormText>

                        <Button>Submit</Button>

                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
       
        );
    }
}

export default Login;