import './inicio.css';
import { useEffect, useMemo } from "react";
import Bruts from '../../components/Busqueda/Bruts';
import { team4 } from '../../json/team4';
import { Container, Row, Col } from 'react-bootstrap';
import { TeamCard } from "./components/TeamCard";
import { useTheme } from "../../context/ThemeContext";


export const Inicio = () => {
  //TeamCard
  const { theme } = useTheme();

  const renderedTeam = useMemo(() => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {team4.map((item, index) => (
        <Col key={index}>
          <TeamCard item={item} theme={theme} />
        </Col>
      ))}
    </Row>
  ), [theme, team4]);
//TeamCard

  return (
    <>
      
      <div id="bannerp" >
      <div className='bannerp' style={{ backgroundImage: `url("https://masterscoding.com/wp-content/uploads/2020/06/Banner-817x400-05-scaled.jpg")` }}>
        {
          <Bruts />
        }
      </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='team4_logo' >
              <div className='team4_logo_img' style={{ backgroundImage: `url("https://pluspng.com/img-png/react-logo-png-react-logo-png-img-900-900-free-transparent-react-png-900x900.jpg")` }}>

              </div>
            </div>
          </div>
          <div className='team4_titulos'>
            <h1>PROYECTO TEAM 4</h1>
          </div>
          <div className='team4_content'>
            <p>Pagina desarrollada como proyecto final del curso React</p>
              
          </div>
        </div>
       

      </div>
      <Container>
      {renderedTeam}
      <Row>
        <Col>
          <hr className="hr-gob mt-4 mb-4" />
        </Col>
      </Row>
    </Container>
    </>
  )
};
 
