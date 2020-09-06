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
            <small className="text-muted">price : {props.books.price}</small>
          </CardText>
            <Button color="warning" onClick={toggle}>Details</Button>{' '} 
            <Button color="info">Add to Cart</Button> 
        </CardBody>
      </Card>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{props.books.name, props.books.author}</ModalHeader>
        <ModalHeader ><small className="text-muted">price : {props.books.author}</small></ModalHeader>
        <ModalFooter>
          {props.books.name}
        </ModalFooter>
        <ModalBody>
          Crime and Punishment focuses on the mental anguish and moral 
          dilemmas of Rodion Raskolnikov, an impoverished ex-student in 
          Saint Petersburg who formulates a plan to kill an unscrupulous 
          pawnbroker for her money.
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Bookcard;