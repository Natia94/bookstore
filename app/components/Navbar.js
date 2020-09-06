import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Form,
  Label,
  Input
} from 'reactstrap';

import {FaShoppingCart, FaUserAlt} from 'react-icons/fa'


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Natia's BookStore</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to ="/getAllbooks">All Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to ="/science">Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to ="/fiction">Fiction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/romance'">Romance</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/novel">Novel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/narative">Narative</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/mystery">Mystery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/fantasy">Fantasy</NavLink>
            </NavItem>

            <Form>
              <Label>
                <Input type="email" placeholder="Search" /> 
              </Label>
            </Form>
            <NavLink tag={Link} to="/"> Shoping Cart <FaShoppingCart/></NavLink>

            <NavLink tag={Link} to="/UserAccount"> User <FaUserAlt/></NavLink>
        
          </Nav>
          
           
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;