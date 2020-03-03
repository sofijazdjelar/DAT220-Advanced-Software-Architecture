import { useState, useEffect } from "react";
import Layout from "../components/layout";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Spinner
} from "react-bootstrap";
import withAuth from "../components/auth";
import { database } from "../config";

const logic = 'if <doorcam.id=="unknown"> then <door.1.lock>';

const CompositeLogic = () => {
  const [activated, setActivated] = useState(null);

  useEffect(() => {
    database.ref("gandalf_123/composite_logic").on(
      "value",
      snapshot => {
        const data = snapshot.val();
        setActivated(data.activated);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  const handleSave = elements => {
    event.preventDefault();

    const { value } = elements.composite;

    database
      .ref("gandalf_123/composite_logic")
      .set({
        activated: value === logic
      })
      .then(() => setActivated(true))
      .catch(() => setActivated(false));
  };

  const handleDeactivation = () => {
    database
      .ref("gandalf_123/composite_logic")
      .set({
        activated: false
      })
      .then(() => setActivated(false))
      .catch(() => setActivated(true));
  };

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <Row>
          <Col xs={12} sm={6}>
            <Card>
              <Card.Header as="h3">Composite logic</Card.Header>
              <Card.Body>
                <p>
                  In this part of the dashboard you can enter a small script of
                  actions that will be executed if some condition is true.
                </p>
                <p>{`E.g. ${logic}`}</p>
                <Form onSubmit={event => handleSave(event.target.elements)}>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        placeholder="Enter script..."
                        required
                        name="composite"
                      />
                    </Col>
                  </Form.Row>
                  <Button style={{ marginTop: 16 }} type="submit">
                    Save
                  </Button>
                  {activated && (
                    <Button
                      variant="danger"
                      style={{ marginLeft: 8, marginTop: 16 }}
                      onClick={() => handleDeactivation()}
                    >
                      Deactivate
                    </Button>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default withAuth(CompositeLogic);
