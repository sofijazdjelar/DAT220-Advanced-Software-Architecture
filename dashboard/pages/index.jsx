import withLayout from "../components/layout";
import { Jumbotron } from "react-bootstrap";

const Index = () => (
  <Jumbotron style={{ margin: 16 }}>
    <h1 class="display-4">Hello, person!</h1>
    <p class="lead">
      This is the dashboard for the Ambient Assisted Living viewing the current
      status of the home of 'name'
    </p>
  </Jumbotron>
);

export default withLayout(Index);
