import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/" title="ASsistant blabla">
        <a class="navbar-brand">Ambient Assisted Living</a>
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class={`nav-item ${router.pathname === "/basic" && "active"}`}>
            <Link href="/basic" title="Basic Information">
              <a class="nav-link">Basic Information</a>
            </Link>
          </li>
          <li class={`nav-item ${router.pathname === "/medical" && "active"}`}>
            <Link href="/medical" title="Medical Information">
              <a class="nav-link">Medical Information</a>
            </Link>
          </li>
          <li class={`nav-item ${router.pathname === "/security" && "active"}`}>
            <Link href="/security" title="Security">
              <a class="nav-link">Security</a>
            </Link>
          </li>
        </ul>
        <div class="my-2 my-lg-0">
          <button type="button" class="btn btn-outline-light">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
