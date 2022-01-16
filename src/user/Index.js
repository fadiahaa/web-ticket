import React from 'react'
import { Carousel, Modal, Form, Row, Col, Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/index.css'


function NavbarComp(){
    const [modalShow, setModalShow] = React.useState(false);
    const [loginShow, setLoginShow] = React.useState(false);
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
                            <Button variant='outline-dark' size='sm' onClick={() => setLoginShow(true)}>Login</Button>
                            <LoginModal
                                show={loginShow}
                                onHide={() => setLoginShow(false)}
                            />
                        </Nav.Item>
                        
                        <Nav.Item style={{marginLeft:'2px',marginTop:'2px'}}>
                            <Button variant="outline-danger" size='sm' onClick={() => setModalShow(true)}>Register</Button>
                            <RegisterModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    );
}

function CarouselComp(){
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../assets/images/03-image-location.png')}
                    alt="First slide"
                    width={600}
                    height={400}
                    style={{marginLeft:'auto',marginRight:'auto'}}
                    />
                    {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>    
                <Carousel.Item>
                    <img
                    className="d-block"
                    alt="Second slide"
                    src={require('../assets/images/02-image-expolre.png')}
                    width={600}
                    height={400}
                    style={{marginLeft:'auto', marginRight:'auto'}}
                    />
                    {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block"
                    src={require('../assets/images/01-image-plane.png')}
                    alt="Third slide"
                    width={600}
                    height={400}
                    style={{marginLeft:'auto', marginRight:'auto'}}
                    />
                    {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/planlist'}>slads</Link>
          <Button onClick={props.onHide}>Login</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Register</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
function TicketInput(){
    return(
        <div>
            <div style={{width:'80%',height:'300px',backgroundColor:'#F7F4E9',padding:'10px',marginLeft:'auto',marginRight:'auto',borderRadius:5,marginTop:'30px', marginBottom:'30px'}}>
            <Form>
                <Row>
                    <Col>
                    <Form.Control placeholder="" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="" />
                    </Col>
                </Row>
                </Form>
            </div>
        </div>
    )
}
  




function Home(){
    return(
        <div>
            <NavbarComp/>
            <CarouselComp/>
            <TicketInput/>
        </div>
    )
}

export default Home;