
import React from 'react';
import { useState } from 'react';
import { ethers } from 'ethers';
import { Container, Navbar, NavDropdown, Nav, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaInstagram, FaFacebook, FaDonate, FaChartBar, FaSuitcase, FaMoneyBillWave, FaUserCog, FaEthereum, FaTimes } from 'react-icons/fa';


const Principal = ( ) => {


  const requestAccount = async () =>{
    const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});

     if(accounts.length){
      alert(`Conexión establecida en la cuenta ${accounts[0]}`);
     }
     
  }

  let [datos, sendData] = useState(0);
  const [value, setValue] = useState('');


  const requestActualizar = async (e) =>{

    e.preventDefault();
 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    const balance = await provider.getBalance(value);
    datos = `${ethers.utils.formatEther(balance)}`;
    sendData(parseFloat(datos).toFixed(4));
     
  }


  return (
    <div className='scrol'>

<Navbar collapseOnSelect expand="lg" variant="dark">
            <Container fluid>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-md-end">
                    <Nav >
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

      <div className='wrapper'>

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
        
        <Container className='d-flex justify-content-md-end mt-5'>
          <Row >
            <Col>
            <form onSubmit={requestActualizar}>
            <div className='bg-ethe '>
              <p>Saldo disponible en Wallet</p>
              <input className='forma_llpub' type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder="Escribe tu llave pública"/>
              <p className='dat-eth-val'><FaEthereum color="black" />{datos} ETH</p>

              <div className='d-flex justify-content-md-center align-center'>
              <button className='sepa-bot btn btn-primary'
              onClick={requestAccount}
              >Conectar</button>
              

              <button className='sepa-bot btn btn-primary'
              >Actualizar</button>  
              </div>
              
              
            </div>
            </form>
            </Col>
            <Col>
            <div className='bg-ethe'>
            <p>  Proyectos fondeados</p>
              <p className='num_fond'>8</p>
              <a className='detalles_port' href="/">Ver detalles del portafolio</a>
            </div>
            </Col>
          </Row>
        </Container>

       
        
      </div>
      <Container className='d-flex justify-content-md-center mt-5'>
        <Row>
          <Col>
            <div className='bg-stats'>
              <p className='txt-stat d-flex justify-content-md-center align-items'>Estadísticas</p>
              
            </div>
            </Col>
          </Row>
        </Container>
      
    </div>
    



  );
};
  
export default Principal;