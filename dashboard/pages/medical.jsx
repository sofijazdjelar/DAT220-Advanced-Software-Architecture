import { Card, Container, Row } from "react-bootstrap";
import withLayout from "../components/layout";
import Layout from "../components/layout";

const Medical = ({ data }) => (
  <Layout>
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
  </Layout>
);

export default Medical;
