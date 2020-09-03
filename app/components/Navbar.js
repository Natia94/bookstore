import React, { useState } from 'react';
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
  NavbarText
} from 'reactstrap';

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
              <NavLink href="#">All Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Fiction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Romance</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Novel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Narative</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Mystery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Fantasy</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Shoping cart</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;