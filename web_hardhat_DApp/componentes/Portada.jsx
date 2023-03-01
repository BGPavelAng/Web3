
import bitc from '../imagenes/bitc.jpg';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Portada = () => {


  const [isActive, setActive] = useState(0);

  const trans_mov = () => {

    setActive(!isActive);
  }

    return(

      <div>
        
        <Container className={`mt-5 trans-mov${isActive ? " active" : ""}`}>

            <Row>
                <Col className='position_text' md={5}>
            
                <p className='Texto-inicial'>
                    
                        CROWDFUNDING
                        
                </p>
                

                <p className='Texto_p'>
                    Utiliza tokens de Criptomonedas para realizar fondeos y apoyar proyectos nuevos.

                </p>
                <div className='d-flex align-items justify-content-sm-center mt-5'>

                <button className=' btn btn-primary'
                    onClick={trans_mov}
                >{isActive ? "Regresar" : "Iniciar sesión"}</button>

                </div>
               
                </Col>
                <Col md={7}>
            
                <img className="forma_img mt-3 mb-3 img-fluid" src={bitc} alt="" />

                </Col>
            </Row>
            
        </Container>
        
        <div className={`pos_log${isActive ? " active" : ""}`}>
             <div className='color_forma'>
                <div className='pos_obj'>
                  <p className="tipo-ini">Iniciar sesión</p>
                  <p className='separa_log'><input className='forma_input' type="text" placeholder='Usuario'></input></p>
                  <p className='separa_log'><input className='forma_input' type="password" placeholder='Password'></input></p>
                  <a href='/entrar'><input type="button" className='btn btn-primary separa_log' value="ENTRAR"></input></a>
                  <p className=" separa_log tipo-pasS">¿Recuperar contraseña?</p>
                </div>
             </div>
        </div>


      </div>
        
        
    );
}

export default Portada;