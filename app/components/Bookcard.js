import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Bookcard = (props) => {
    console.log('props', props)
  return (
    <div>
        
                <Card body outline color="warning">
                    <CardImg top width="100%" height= "30%" src="https://www.svgrepo.com/show/211/flower.svg" alt="Card Image Cap" />
                    <CardBody>
                    <CardTitle>{props.books.name}</CardTitle>
                    <CardText>{props.books.author}</CardText>
                    <CardText>
                        <small className="text-muted">{props.books.description}</small>
                    </CardText>
                    <Button color="warning">Details</Button>
                    </CardBody>
                </Card>
       
    </div>
  );
};

export default Bookcard;