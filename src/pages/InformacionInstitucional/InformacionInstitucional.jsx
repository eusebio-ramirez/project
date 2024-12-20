import { useEffect, useMemo, useState } from "react";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import useProgramas from "./usePrograms";
import "./css/InformacionInstitucional.css";

const Programas = () => {
  const { programas, actualizarProgramas } = useProgramas(); // Hook personalizado
  const { data, loading, error } = useGet("https://api-project-ap9h.onrender.com/api/programas");
  const [expandedProgramIndex, setExpandedProgramIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Estado para la búsqueda
  const [grayscale, setGrayscale] = useState(false); // Opcional: Simula la funcionalidad del tema

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      actualizarProgramas(data);
    }
  }, [data, actualizarProgramas]);

  const containerClass = useMemo(
    () => `container1 ${grayscale ? "grayscale" : ""} containerRubros`,
    [grayscale]
  );

  const toggleDocuments = (index) => {
    setExpandedProgramIndex(expandedProgramIndex === index ? null : index);
  };

  const closeOverlay = () => {
    setExpandedProgramIndex(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const content = useMemo(() => {
    if (loading) return <div>Cargando...</div>; 
    if (error) return <div>Error.</div>;
    if (programas && Array.isArray(programas)) {
      return (
        <Row className="espace">
          {programas.map((programa, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{programa.acuerdo}</Card.Title>
                  <Button
                    variant="primary" onClick={() => toggleDocuments(index)} className="buttonInformacion"
                  >
                    {expandedProgramIndex === index ? "Cerrar" : "Ver Más"}
                  </Button>
                </Card.Body>
              </Card>
              {expandedProgramIndex === index && (
                <div className="overlay" onClick={closeOverlay}>
                  <div
                    className="documents-container highlight-documents"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Buscar"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="search-input"
                    />
                    <Row className="documents-scroll-container">
                      {programa.documentos
                        .filter((doc) =>
                          doc.nombre.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((doc, docIndex) => (
                          <Col md={6} lg={4} key={docIndex} className="mb-4">
                            <Card className="documents-card">
                              <Card.Body>
                               
                                <Card.Title>{doc.nombre}</Card.Title>
                                <a
                                  href={doc.linkPDF}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="buttonInformacion"
                                >
                                  Ver
                                </a>
                          
                              </Card.Body>
                            </Card>
                          </Col>
                        ))}
                    </Row>
                  </div>
                </div>
              )}
            </Col>
          ))}
        </Row>
      );
    }
    return null;
  }, [loading, error, programas, expandedProgramIndex, searchQuery]);

  return (
    <Container className={containerClass}>
      <h1 className="principalTitle">Programas de Bienestar del Sistema Para el Desarrollo Integral de la Familia del Estado de Hidalgo  </h1>
      {content}
    </Container>
  );
};

export default Programas;
