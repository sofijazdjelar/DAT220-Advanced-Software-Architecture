import Link from "next/link";
import Header from "../components/header";

export default function Index() {
  return (
    <div>
      <Header />
      <div class="jumbotron" style={{ margin: 16 }}>
        <h1 class="display-4">Hello, person!</h1>
        <p class="lead">
          This is the dashboard for the <strong>Ambient Assisted Living</strong>{" "}
          viewing the current status of the home of 'name'
        </p>
      </div>
    </div>
  );
}
