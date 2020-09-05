import React, {useState}  from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Bookcard = (props) => {
    //console.log('props', props)
    const {
      buttonLabel,
      className
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Card body outline color="warning">
        <CardImg top width="100%" height= "30%" src="https://www.svgrepo.com/show/211/flower.svg" alt="Card Image Cap" />
        <CardBody>
          <CardTitle>{props.books.name}</CardTitle>
          <CardText>{props.books.author}</CardText>
          <CardText>
            <small className="text-muted">{props.books.price}</small>
          </CardText>
            <Button color="warning" onClick={toggle}>Details</Button> 
            <Button color="info">Add to Cart</Button> 
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          {props.books.price}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default Bookcard;