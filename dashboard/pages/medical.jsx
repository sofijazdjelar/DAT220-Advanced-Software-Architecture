import Header from "../components/header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Medical({ data }) {
  return (
    <div>
      <Header />
      <Container fluid style={{ marginTop: 16 }}>
        <h1>2020-02-02</h1>
        <Card>
          <Card.Body>
            <Container fluid>
              <Row>Steps today: 10000</Row>
              <Row>Glucose level: 4.5 mmol/L</Row>
              <Row>Avg. heart rate: 80 bpm</Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
