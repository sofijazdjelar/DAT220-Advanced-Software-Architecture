import { Card, Container, Row, Col } from "react-bootstrap";
import Lock from "../components/lock";
import Layout from "../components/layout";

const doors = [
  {
    id: 1,
    isOpen: false
  },
  {
    id: 2,
    isOpen: false
  },
  {
    id: 3,
    isOpen: true
  }
];

const windows = [
  ...doors,
  {
    id: 4,
    isOpen: true
  },
  {
    id: 5,
    isOpen: true
  },
  {
    id: 6,
    isOpen: true
  }
];

const Security = ({ data }) => {
  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <Row>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Doors</Card.Header>
              <Card.Body>
                <Container>
                  {doors.map(door => (
                    <Row key={`door-${door.id}`}>
                      <Lock type="Door" data={door} />
                    </Row>
                  ))}
                </Container>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Windows</Card.Header>
              <Card.Body>
                <Container>
                  {windows.map(window => (
                    <Row key={`window-${window.id}`}>
                      <Lock type="Window" data={window} />
                    </Row>
                  ))}
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Security;
