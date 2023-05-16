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
  NavbarText,
} from 'reactstrap';

import { NavLink as ReactLink } from 'react-router-dom';

const CustomNavbar = () =>{

      const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen);

      return (
            <div>
                  <Navbar
                        color='dark'
                        fixed='top'
                        dark='true'
                        container='fluid'
                        expand='md'
                        light='false'
                        full='true'
                  >
                        <NavbarBrand href="/">AnBlogs</NavbarBrand>
                        <NavbarToggler onClick={toggle} />Options
                        <Collapse isOpen={isOpen} navbar>
                              <Nav className="me-auto" navbar>
                                    <NavItem>
                                          <NavLink tag={ReactLink} to ="/about">About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                          <NavLink tag={ReactLink} to ="/login">
                                                Login
                                          </NavLink>
                                    </NavItem>

                                    <NavItem>
                                          <NavLink tag={ReactLink} to="/signup">
                                                Sign-Up
                                          </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                          <DropdownToggle nav caret>
                                                More
                                          </DropdownToggle>
                                          <DropdownMenu right>
                                                <DropdownItem>Services</DropdownItem>
                                                <DropdownItem>Contact Me</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>My Github</DropdownItem>
                                                </DropdownMenu>
                                    </UncontrolledDropdown>
                              </Nav>
                              <NavbarText>ananay</NavbarText>
                        </Collapse>
                  </Navbar>
            </div>
      );
};

export default CustomNavbar;