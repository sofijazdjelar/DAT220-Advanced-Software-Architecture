import { Card, Container, Image, Row, Col } from "react-bootstrap";
import withLayout from "../components/layout";

const Basic = ({ data }) => (
  <Container fluid style={{ marginTop: 16 }}>
    <Card>
      <Card.Body>
        <Row>
          <Col sm="3">
            <Image src="./images/old_person.jpg" width={300} rounded />
          </Col>
          <Col sm="auto">
            <Row>Name: Gandalf the Grey</Row>
            <Row>Phone number (home): 0123456789</Row>
            <Row>Age: 300</Row>
            <Row>Address: Gandalf the Grey</Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
);

export default withLayout(Basic);
