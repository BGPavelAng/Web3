

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const NavBar = () =>{

    return(
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand className="text-white" href="#">
                    CrowdFunding Beta
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-center">
                    <Nav className="me-auto">
                      <Nav.Link className="text-white" href="#" >Home</Nav.Link>
                      <Nav.Link className="text-white" href="#" >Fondeo</Nav.Link>
                      <NavDropdown  title="Cómo funciona" id="collasible-nav-dropdown">
                        <NavDropdown.Item  href="#">Fondeos</NavDropdown.Item>
                        <NavDropdown.Item  href="#">Criptomoneda</NavDropdown.Item>
                        <NavDropdown.Item  href="#">Sobre Wallet</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link className="text-white" href="#" >Wallet</Nav.Link>
                      <Nav.Link className="text-white" href="#" >Quienes sómos</Nav.Link>
                    </Nav>
                    <Nav>
                      <div className='linea_redes'>
                      <Nav.Link href="instagram.com" target="_blank"><FaInstagram className="icon-siz" color='white' /></Nav.Link>
                      <Nav.Link href="instagram.com" target="_blank"><FaTwitter className="icon-siz" color='white' /></Nav.Link>
                      <Nav.Link href="instagram.com" target="_blank"><FaFacebook className="icon-siz" color='white' /></Nav.Link>
                      </div>
                    
                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    );
}

export default NavBar;