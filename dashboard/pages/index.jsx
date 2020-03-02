import { Jumbotron, Container, Row, Button, Form, Card } from "react-bootstrap";
import Layout from "../components/layout";
import { auth, firebase } from "../config";
import router from "next/router";

const Index = () => {
  const handleSignIn = event => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then(auth => {
        router.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderLayout = () => (
    <Layout>
      <Jumbotron style={{ margin: 16 }}>
        <h1 className="display-4">Hello, {auth?.currentUser?.email}!</h1>
        <p className="lead">
          This is the dashboard for the Ambient Assisted Living viewing the
          current status of the home of 'name'
        </p>
      </Jumbotron>
    </Layout>
  );

  const renderUnauthorizedLayout = () => (
    <Container fluid style={{ paddingTop: 16 }}>
      <Row xs={12} sm={4} className="justify-content-md-center">
        <h1>Welcome to the AAL system</h1>
      </Row>
      <Row
        xs={12}
        sm={4}
        className="justify-content-md-center"
        style={{ marginTop: 16 }}
      >
        <Card style={{ padding: 16 }} fluid>
          <Form onSubmit={handleSignIn}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Row>
    </Container>
  );

  return <>{auth?.currentUser ? renderLayout() : renderUnauthorizedLayout()}</>;
};

export default Index;
