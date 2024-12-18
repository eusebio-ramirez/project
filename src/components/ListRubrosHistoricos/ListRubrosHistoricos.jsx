import { Card, CardSubtitle, Col, ListGroup, Row } from "react-bootstrap";
import './listRubrosHistoricos.css';

const ListRubrosHistoricos = ({ data }) => {
  return (
    <>
      <Row className="rowRubrosHistoricos">
        {data.map((item, index) => (
          <Col key={`rubro-hist-${index}`} xl={4} lg={6} md={6}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {item.title}
                </Card.Title>
                <CardSubtitle>
                  {item.description}
                </CardSubtitle>
              </Card.Body>
              <ListGroup>
                {item.content.map((content, index2) => (
                  <ListGroup.Item action target="_blank" href={content.file} key={`content-${index}-${index2}`}>
                    {content.title}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ListRubrosHistoricos;