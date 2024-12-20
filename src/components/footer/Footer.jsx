import React from "react";

import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='container-footer'>
            <div className='container-fluid'>
                <div className='row first-row'>
                    <div className='col-md-9 col-12'>
                        <div className='footer_logo_numbers'>
                            <div className='footer_logo'>
                                <img src='https://cdn.hidalgo.gob.mx/gobierno/images/logos/logo_gob.png' />
                            </div>
                            <div className='footer_numbers'>
                                <div>
                                    <p>911</p>
                                    <p>Emergencia</p>
                                </div>
                                <div>
                                    <p>089</p>
                                    <p>Denuncia Anónima</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 col-12'>
                        <div className='footer_contacto'>
                            <h6><a href='https://gobierno.hidalgo.gob.mx/AvisoPrivacidad' target="_blank">Aviso de privacidad</a></h6>
                            <h6>Contacto:</h6>
                            <p>Plaza Juárez s/n Col. Centro</p>
                            <p>Pachuca de Soto, Hidalgo, México</p>
                        </div>
                    </div>
                </div>
                <hr className='hr-gob' />
                <div className='row second-row'>
                    <div className='col-sm-9 col-12'>
                        <p>Copyrights © {currentYear} Todos los derechos reservados por Hidalgo de la Transformación</p>
                    </div>
                    <div className='col-sm-3 col-12'>
                        <div className='footer_sociales'>
                            <a href='https://www.facebook.com/gobhidalgo' target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href='https://twitter.com/gobiernohidalgo' target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Footer;