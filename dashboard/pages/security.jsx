import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import Lock from "../components/lock";
import Layout from "../components/layout";
import Firebase from "../config";

const Security = () => {
  const [locks, setLocks] = useState([]);

  useEffect(() => {
    let ref = Firebase.database().ref("/dt");
    ref.on(
      "value",
      snapshot => {
        const data = snapshot.val();
        console.log("data", data);
        setLocks(data);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <Row>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Doors</Card.Header>
              <Card.Body>
                {locks.door_lock ? (
                  <Container>
                    {locks.door_lock?.map(door => (
                      <Row key={`door-${door?.id}`}>
                        <Lock type="Door" data={door} />
                      </Row>
                    ))}
                  </Container>
                ) : (
                  <Spinner animation="grow" />
                )}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} xs={12}>
            <Card>
              <Card.Header as="h3">Windows</Card.Header>
              <Card.Body>
                {locks.window_lock ? (
                  <Container>
                    {locks.window_lock?.map(window => (
                      <Row key={`window-${window?.id}`}>
                        <Lock type="Window" data={window} />
                      </Row>
                    ))}
                  </Container>
                ) : (
                  <Spinner animation="grow" />
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Security;
