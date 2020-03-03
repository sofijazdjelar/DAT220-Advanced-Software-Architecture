import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Badge
} from "react-bootstrap";
import Lock from "../components/lock";
import Layout from "../components/layout";
import { firebase, storage } from "../config";
import withAuth from "../components/auth";

const Security = () => {
  const [windowLocks, setWindowLocks] = useState([]);
  const [doorLocks, setDoorLocks] = useState([]);
  const [currentPasser, setCurrentPasser] = useState(null);

  useEffect(() => {
    let ref = firebase.database().ref("gandalf_123/security");
    ref.on(
      "value",
      snapshot => {
        const data = snapshot.val();
        const passer = data?.dt?.face_recog.current_passer;

        setWindowLocks(data?.dt?.window_lock);
        setDoorLocks(data?.dt?.door_lock);
        storage
          .ref("/images/people")
          .child(passer?.id + ".jpg")
          .getDownloadURL()
          .then(url =>
            setCurrentPasser({
              id: passer?.id,
              category: passer?.category,
              url
            })
          )
          .catch(error => console.log(error));
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
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Doors</Card.Header>
              <Card.Body>
                {doorLocks ? (
                  <Container>
                    {doorLocks?.map(door => (
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
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Windows</Card.Header>
              <Card.Body>
                {windowLocks ? (
                  <Container>
                    {windowLocks?.map(window => (
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
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Facial recognition events</Card.Header>
              <Card.Body>
                {currentPasser ? (
                  <Container>
                    <Row className="justify-content-md-center">
                      <Image src={currentPasser.url} height={200} />
                    </Row>
                    <Row className="justify-content-md-center">
                      <span>{currentPasser.id}</span>
                    </Row>
                    <Row
                      className="justify-content-md-center"
                      style={{ marginTop: 8 }}
                    >
                      <Badge
                        pill
                        variant={
                          currentPasser.id === "unknown" ? "danger" : "success"
                        }
                      >
                        {currentPasser.category}
                      </Badge>
                    </Row>
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

export default withAuth(Security);
