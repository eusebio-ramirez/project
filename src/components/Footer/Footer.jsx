import { Container, Row, Col } from 'react-bootstrap';
import reactIcon from '../../assets/images/react-icon.png';
import { useSelector } from 'react-redux';
// HF
import { useContext } from 'react'; 
import { HeaderFooterContext } from '../../context/HeaderFooterContext';

const Footer = () => {
    const grayscale = useSelector((state) => state.theme.grayscale);
    // HF
    const { alternativeColor } = useContext(HeaderFooterContext);
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-info py-4 ${ grayscale ? 'grayscale' : '' } ${alternativeColor ? 'alternativeColor' : ''} footer`}>
            <Container className='text-center'>
                <Row>
                    <Col className='pb-3 d-flex justify-content-center' lg={4}>
                        <img style={{ width: '30%', objectFit: 'contain' }} src={reactIcon} />
                    </Col>
                    <Col className='pb-3' lg={4}>
                        <h5 className='mb-0'>911</h5>
                        <p className='mb-2'>Emergencia</p>
                        <h5 className='mb-0'>089</h5>
                        <p className='mb-0'>Denuncia Anónima</p>
                    </Col>
                    <Col className='pb-3' lg={4}>
                        <p className='mb-2'>Aviso de privacidad</p>
                        <h5 className='mb-0'>Contacto</h5>
                        <p className='mb-0'>(771) 71 76000</p>
                        <p className='mb-0'>Plaza Juárez S/N, Col. Centro</p>
                        <p className='mb-0'>Pachuca de Soto, Hidalgo, México</p>
                    </Col>
                </Row>
                <Row className="pt-3" style={{ borderTop: 'solid', borderColor: '#000' }}>
                    <Col lg={6}>
                        <p className="mb-0">Copyrights © {currentYear} Todos los derechos reservados por Hidalgo de la Transformación</p>
                    </Col>
                    <Col className='d-flex justify-content-center' style={{ gap: '1.5rem' }} lg={6}>
                        <a style={{ color: '#000', fontSize: '2rem'}} href='https://www.youtube.com/' target='_blank'><i className="bi bi-facebook"></i></a>
                        <a style={{ color: '#000', fontSize: '2rem'}} href='https://www.youtube.com/' target='_blank'><i className="bi bi-instagram"></i></a>
                        <a style={{ color: '#000', fontSize: '2rem'}} href='https://www.youtube.com/' target='_blank'><i className="bi bi-twitter-x"></i></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
