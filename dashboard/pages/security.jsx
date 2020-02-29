import { Card, Container, Row, Col, Badge } from "react-bootstrap";
import withLayout from "../components/layout";

const Security = ({ data }) => (
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
);

export default withLayout(Security);
