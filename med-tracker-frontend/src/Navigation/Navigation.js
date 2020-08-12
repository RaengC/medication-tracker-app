import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'

let time = moment().format("dddd, Do MMMM YYYY, h:mm a")

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

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Profile
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    <Link to="/profile">Medication</Link>
                                </DropdownItem>
                                <DropdownItem>
                                    <Link to="/addMedication">Add Medication</Link>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <Link to="/editMedication">Edit Medication</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

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
                    <NavbarText>{time}</NavbarText>
                </Collapse>
            </Navbar>

        </React.Fragment>
    )
}


export default Navigation