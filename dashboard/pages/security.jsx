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
import { database, storage } from "../config";
import withAuth from "../components/auth";

const Security = () => {
  const [windowLocks, setWindowLocks] = useState([]);
  const [doorLocks, setDoorLocks] = useState([]);
  const [currentPasser, setCurrentPasser] = useState(null);
  const [compositeLogic, setCompositeLogic] = useState(false);

  useEffect(() => {
    database.ref("gandalf_123").on(
      "value",
      snapshot => {
        const data = snapshot.val();
        const passer = data.security?.dt?.face_recog.current_passer;

        setWindowLocks(data?.security?.dt?.window_lock);
        setDoorLocks(data?.security?.dt?.door_lock);
        setCompositeLogic(data?.composite_logic.activated);
        if (passer.id !== "none") {
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
        } else {
          setCurrentPasser({
            id: passer?.id,
            category: passer?.category
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  useEffect(() => {
    if (compositeLogic && currentPasser.category === "unknown") {
      database
        .ref("gandalf_123/security/dt/door_lock/1")
        .once("value")
        .then(snapshot => {
          snapshot.ref.update({ isOpen: "false" });
        });
    }
  }, [currentPasser]);

  const renderFaceRecogView = passer => {
    if (passer) {
      return currentPasser.id === "none" ? (
        <span>No one is currently in front of the camera</span>
      ) : (
        <Container>
          <Row className="justify-content-md-center">
            <Image src={currentPasser.url} height={200} />
          </Row>
          <Row className="justify-content-md-center">
            <span>{currentPasser.id}</span>
          </Row>
          <Row className="justify-content-md-center" style={{ marginTop: 8 }}>
            <Badge
              pill
              variant={currentPasser.id === "unknown" ? "danger" : "success"}
            >
              {currentPasser.category}
            </Badge>
          </Row>
        </Container>
      );
    } else {
      return <Spinner animation="grow" />;
    }
  };

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
              <Card.Body>{renderFaceRecogView(currentPasser)}</Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default withAuth(Security);
