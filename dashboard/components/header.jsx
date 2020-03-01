import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";

const Header = () => {
  const router = useRouter();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ paddingTop: 16, paddingBottom: 16 }}
    >
      <Link href="/">
        <a title="Ambient Assisted Living" className="navbar-brand">
          Ambient Assisted Living
        </a>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto">
          <li
            className={`nav-item ${router.pathname === "/basic" && "active"}`}
          >
            <Link href="/basic">
              <a title="Basic Information" className="nav-link">
                Basic Information
              </a>
            </Link>
          </li>
          <li
            className={`nav-item ${router.pathname === "/medical" && "active"}`}
          >
            <Link href="/medical">
              <a title="Medical Information" className="nav-link">
                Medical Information
              </a>
            </Link>
          </li>
          <li
            className={`nav-item ${router.pathname === "/security" &&
              "active"}`}
          >
            <Link href="/security">
              <a title="Security" className="nav-link">
                Security
              </a>
            </Link>
          </li>
          <li
            className={`nav-item ${router.pathname === "/photos" && "active"}`}
          >
            <Link href="/photos">
              <a title="Photos" className="nav-link">
                Photo upload!
              </a>
            </Link>
          </li>
        </ul>
        <div className="my-2 my-lg-0">
          <button type="button" className="btn btn-outline-light">
            Log in
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
