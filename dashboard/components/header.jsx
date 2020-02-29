import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      style={{ paddingTop: 16, paddingBottom: 16 }}
    >
      <Link href="/">
        <a title="Ambient Assisted Living" className="navbar-brand">
          Ambient Assisted Living
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
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
      </div>
    </nav>
  );
};

export default Header;
