import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgramas } from "../../features/Programas/ProgramasSlice";
import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";
import useGet from "../../hooks/useGet";
import Loader from "../../components/Loader/Loader";
import ErrorFetch from "../../components/ErrorFetch/ErrorFetch";
import "./informacionInstitucional.css";

const Programas = () => {
  const grayscale = useSelector((state) => state.theme.grayscale);
  const dispatch = useDispatch();
  const { data, loading, error } = useGet("https://api-project-ap9h.onrender.com/api/programas");
  const [expandedProgramIndex, setExpandedProgramIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State para la búsqueda

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setProgramas(data));
    }
  }, [data, dispatch]);

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
    if (loading) return <Loader />;
    if (error) return <ErrorFetch />;
    if (data && Array.isArray(data)) {
      return (
        <Row>
          {data.map((programa, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{programa.acuerdo}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => toggleDocuments(index)}
                    className="mt-2"
                  >
                    {expandedProgramIndex === index ? "Ocultar Documentos" : "Ver Documentos"}
                  </Button>
                </Card.Body>
              </Card>
              {expandedProgramIndex === index && (
                <div className="overlay" onClick={closeOverlay}>
                  <div
                    className="documents-container highlight-documents"
                    onClick={(e) => e.stopPropagation()} // Evita cerrar el overlay al hacer clic en los documentos
                  >
                    <Form.Control
                      type="text"
                      placeholder="Buscar documento..."
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
                                <img
                                  src="/path/to/pdf-thumbnail.png" // Miniatura del PDF
                                  alt="PDF"
                                  className="document-thumbnail"
                                />
                                <Card.Title>{doc.nombre}</Card.Title>
                                <a
                                  href={doc.linkPDF}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="document-link"
                                >
                                  Ver Documento
                                </a>
                                <div className="document-options mt-2">
                                  <Button
                                    variant="link"
                                    className="document-option"
                                    onClick={() => window.open(doc.linkPDF, "_blank")}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-eye"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M16 8s-3 6-8 6c-5 0-8-6-8-6s3-6 8-6c5 0 8 6 8 6zM8 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                                    </svg>
                                    Ver en Línea
                                  </Button>
                                  <Button
                                    variant="link"
                                    className="document-option"
                                    onClick={() => window.location.href = doc.linkPDF}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-download"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M8 12a.5.5 0 0 1-.5-.5V2.707l-2.646 2.646a.5.5 0 1 1-.708-.708L8 1.293l3.854 3.854a.5.5 0 1 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-.5.5z" />
                                    </svg>
                                    Descargar
                                  </Button>
                                </div>
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
  }, [loading, error, data, expandedProgramIndex, searchQuery]);

  return (
    <Container className={containerClass}>
      <h1 className="principalTitle">
        Programas
      </h1>
      {content}
    </Container>
  );
};

export default Programas;
