import React from 'react'
import { Carousel, Modal, Form, Row, Col, Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import '../style/index.css'

function NavbarComp(){
    return(
        <div>
            <Navbar style={{backgroundColor:'#F7F4E9'}} expand="lg">
                <Container>
                        <Navbar.Brand style={{color:'#E40C2B'}} href="#">Tick-Et</Navbar.Brand>   
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Flight Ticket</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Train Ticket</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Item style={{marginTop:'2px',marginLeft:'2px'}}>
                            <Button variant='outline-dark' size='sm'>Login</Button>
                        </Nav.Item>
                        
                        <Nav.Item style={{marginLeft:'2px',marginTop:'2px'}}>
                            <Button variant="outline-danger" size='sm'>Register</Button>
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
}

  




function PlanList(){
    return(
        <div>
            <NavbarComp/>
        </div>
    )
}

export default PlanList;