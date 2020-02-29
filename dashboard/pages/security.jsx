import Header from "../components/header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

export default function Security({ data }) {
  return (
    <div>
      <Header />
      <Container fluid style={{ marginTop: 16 }}>
        <Row>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Doors</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <div>
                      Door 1:{" "}
                      <Badge pill variant="primary">
                        Open
                      </Badge>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      Door 2:{" "}
                      <Badge pill variant="secondary">
                        Closed
                      </Badge>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      Door 3:{" "}
                      <Badge pill variant="secondary">
                        Closed
                      </Badge>
                    </div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Windows</Card.Header>
              <Card.Body>
                <Container>
                  <Row>
                    <div>
                      Window 1:{" "}
                      <Badge pill variant="primary">
                        Open
                      </Badge>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      Window 2:{" "}
                      <Badge pill variant="secondary">
                        Closed
                      </Badge>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      Window 3:{" "}
                      <Badge pill variant="secondary">
                        Closed
                      </Badge>
                    </div>
                  </Row>
                  <Row>
                    <div>
                      Window 4:{" "}
                      <Badge pill variant="secondary">
                        Closed
                      </Badge>
                    </div>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
