import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import Ruleta from '../imagenes/Scan.jpg';
import Construccion from '../imagenes/20-04_orig.jpg'
import { Container, Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebook, FaDonate, FaChartBar, FaSuitcase, FaMoneyBillWave, FaUserCog, FaTimes } from 'react-icons/fa';


const Fondeo = () =>{

    const account8 = '0x90F79bf6EB2c4f870365E785982E1f101E93b906'
    const privateKey1 = '0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const wallet = new ethers.Wallet(privateKey1, provider);

    const [value, setValue] = useState('');

const Envio_eth = async (e) =>{

  e.preventDefault();

    const tx = await wallet.sendTransaction({

        to: account8,
        value: ethers.utils.parseEther(value),
    });

    await tx.wait();
    alert(`Proyecto en proceso de fondeo ${(value)} eth`);
}

    return(
<div className='scrol'>

<Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end">
                    <Nav >
                      <Nav.Link className="text-white" href="/entrar" >Home</Nav.Link>
                      <Nav.Link className="text-white" href="#" >Fondeo</Nav.Link>
                      <NavDropdown  title="Cómo funciona" id="collasible-nav-dropdown">
                        <NavDropdown.Item  href="#">Fondeos</NavDropdown.Item>
                        <NavDropdown.Item  href="#">Criptomoneda</NavDropdown.Item>
                        <NavDropdown.Item  href="#">Sobre Wallet</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link className="text-white" href="#" >Wallet</Nav.Link>
                      <Nav.Link className="text-white" href="#" >Quienes sómos</Nav.Link>
                    </Nav>
                    <Nav >
                      <div className='linea_redes'>
                      <Nav.Link href="instagram.com" target="_blank"><FaInstagram className="icon-siz" color='white' /></Nav.Link>
                      <Nav.Link href="instagram.com" target="_blank"><FaTwitter className="icon-siz" color='white' /></Nav.Link>
                      <Nav.Link href="instagram.com" target="_blank"><FaFacebook className="icon-siz" color='white' /></Nav.Link>
                      </div>
                    
                    </Nav>
                </Navbar.Collapse>

                

            </Container>

        </Navbar>

        <Nav id="sidebar">
          <div className='sidebar-header'>
          <p className='sty-name'>Pavel Anguiano</p>
          <ul className='menu-lis'>
            <li><a className="links_all" href="/Fondeo" ><FaDonate color="black" /> Fondeo</a></li>
            <li><FaSuitcase color="black" /> Portafolio</li>
            <li><FaChartBar color="black" /> Estadísticas</li>
            <li><FaMoneyBillWave color="black" /> Retiros</li>
            <li><FaUserCog color="black" /> Configuración</li>
          </ul>
          <a href="/" className='off-name' ><FaTimes color='black' /> Cerrar sesión</a>
          </div>

        </Nav>

        <Container className='d-flex justify-content-md-center mt-5'>
          <Row >
            <Col>

            <form onSubmit={Envio_eth}>

              <Container className='colocacion'>
              <Row className='mt-5'>
                   <Col md={3} className='barra color-fondo'>
                      <p>Imagen del producto</p>
                  </Col>
                  <Col md={1} className='barra color-fondo'>
                   <p>Riesgo</p>
                  </Col>
                  <Col md={5} className='barra color-fondo'>
                   <p>Información</p>
                  </Col>
                  <Col md={3} className='barra barra-color'>
                    <p>Prestamo</p>
                  </Col>
                </Row>
              <Row className='mt-3'>
                   <Col md={3} className='barra color-fondo'>
                      <img className='tam-img' src={Ruleta} alt=""></img>
                  </Col>
                  <Col md={1} className='barra color-fondo'>
                   <p className="color-riesgo">B</p>
                  </Col>
                  <Col md={5} className='barra color-fondo'>
                   <p>Buenas, necesito ayuda con un prestamo para poder desarrollar un proyecto que tengo al realizar un hardware en forma de ruleta electrónica como juguete para niños.</p>
                  </Col>
                  <Col md={3} className='barra barra-color'>
                    <input className='mb-3' value={value} type="text" placeholder='Prestamo' onChange={(e) => setValue(e.target.value)}></input>
                  <button className='btn btn-primary' type='submit'>Prestar</button>
                  </Col>
                </Row>
                <Row className='mt-3'>
                   <Col md={3} className='barra color-fondo'>
                      <img className='tam-img' src={Construccion} alt=""></img>
                  </Col>
                  <Col md={1} className='barra color-fondo'>
                   <p className="color-riesgo">B-</p>
                  </Col>
                  <Col md={5} className='barra color-fondo'>
                   <p>Estoy participando en la creación de un diseño integrado a la arquitectura y necesitamos fondos para mejorar el proyecto y llevarlo a concurso internacional.</p>
                  </Col>
                  <Col md={3} className='barra barra-color'>
                    <input className='mb-3' value="" type="text" placeholder='Prestamo'></input>
                  <button className='btn btn-primary' type='submit'>Prestar</button>
                  </Col>
                </Row>
              </Container>
            </form>

            </Col>
          </Row>
        </Container>

    </div>
    );
}

export default Fondeo;