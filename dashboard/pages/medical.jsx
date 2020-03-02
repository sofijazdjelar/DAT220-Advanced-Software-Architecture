import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import ResponsiveLineChart from "../components/responsive-line-chart";
import { firebase } from "../config";
import moment from "moment";

const Medical = ({}) => {
  const [steps, setSteps] = useState([]);
  const [glucose, setGlucose] = useState([]);
  const [heart, setHeart] = useState([]);

  const formatData = (data, yAxis) => {
    if (data?.length === 0) return [];

    const today = moment().format("YYYYMMDD");
    const todaysData = data[today];
    const dataArray = todaysData && Object.entries(todaysData);

    const formattedData = dataArray?.map((value, index) => {
      const hour = moment(parseFloat(value[1].time) * 1000).format("HH");
      const yValue = value[1][yAxis];

      return {
        [yAxis]: yValue,
        hour: index
      };
    });

    return formattedData;
  };

  useEffect(() => {
    let ref = firebase.database().ref("gandalf_123/medical"); // TODO: Change to inhabitant object
    ref.on(
      "value",
      snapshot => {
        const data = snapshot.val();

        setSteps(data?.dt?.step_count);
        setGlucose(data?.dt?.glucose_level);
        setHeart(data?.dt?.heart_rate);
      },
      error => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <h1>{moment().format("YYYY-MM-DD")}</h1>
        <p>
          This page visualizes the medical data retrieved by the inhabitant
          throughout the day
        </p>
        <Row>
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Steps</Card.Header>
              <Card.Body>
                <ResponsiveLineChart
                  data={formatData(steps, "steps")}
                  xAxis="hour"
                  line="steps"
                  color="green"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Glucose level</Card.Header>
              <Card.Body>
                <ResponsiveLineChart
                  data={formatData(glucose, "level")}
                  xAxis="hour"
                  line="level"
                  color="orange"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} xs={12}>
            <Card>
              <Card.Header as="h3">Heart rate</Card.Header>
              <Card.Body>
                <ResponsiveLineChart
                  data={formatData(heart, "bpm")}
                  xAxis="hour"
                  line="bpm"
                  color="red"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Medical;
