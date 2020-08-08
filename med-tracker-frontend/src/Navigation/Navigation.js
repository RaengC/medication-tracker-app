import React, { useState } from 'react'
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
} from 'reactstrap'
import { Link } from 'react-router-dom'

// const isLoggedIn = () => {
//     if (window.localStorage.getItem('token')) {
//         return true
//     } else {
//         return false
//     }
// }

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    // const [loggedIn, setLoggedIn] = useState(isLoggedIn)

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Medication Tracker</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/profile">
                                Profile
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Account
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to="/login">Login</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/register">Create Account</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>

        </React.Fragment>
    )
}


export default Navigation