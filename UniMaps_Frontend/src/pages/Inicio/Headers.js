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
} from 'reactstrap';
import Avisos from './Avisos';

const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="primary" dark expand="md">
                <NavbarBrand href="/">UniMaps</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="https://celke.com.br/">Devs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="http://localhost:3000/Feedback">Feedback</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Opções
                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                  </DropdownItem>
                                <DropdownItem>
                                    Option 2
                  </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                </Collapse>
                <NavbarBrand><Avisos></Avisos> </NavbarBrand>

            </Navbar>
        </div>
    );
}


export default Headers;