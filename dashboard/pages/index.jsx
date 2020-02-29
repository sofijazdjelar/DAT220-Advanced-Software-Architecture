import { Jumbotron } from "react-bootstrap";
import Layout from "../components/layout";

const Index = ({ shows }) => (
  <Layout>
    <Jumbotron style={{ margin: 16 }}>
      <h1 className="display-4">Hello, person!</h1>
      <p className="lead">
        This is the dashboard for the Ambient Assisted Living viewing the
        current status of the home of 'name'
      </p>
      {shows?.map(show => console.log(show))}
    </Jumbotron>
  </Layout>
);

export default Index;
