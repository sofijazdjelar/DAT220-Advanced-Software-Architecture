import Header from "../components/header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Basic({ data }) {
  return (
    <div>
      <Header />
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
    </div>
  );
}
