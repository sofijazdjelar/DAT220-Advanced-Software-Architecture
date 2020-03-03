import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import { auth } from "../config";

const Header = () => {
  const router = useRouter();

  const renderBasicNav = () => (
    <>
      <li className={`nav-item ${router.pathname === "/basic" && "active"}`}>
        <Link href="/basic">
          <a title="Basic Information" className="nav-link">
            Basic Information
          </a>
        </Link>
      </li>
      <li className={`nav-item ${router.pathname === "/security" && "active"}`}>
        <Link href="/security">
          <a title="Security" className="nav-link">
            Security
          </a>
        </Link>
      </li>
      <li className={`nav-item ${router.pathname === "/photos" && "active"}`}>
        <Link href="/photos">
          <a title="Photos" className="nav-link">
            Photo upload!
          </a>
        </Link>
      </li>
      <li
        className={`nav-item ${router.pathname === "/compositeLogic" &&
          "active"}`}
      >
        <Link href="/compositeLogic">
          <a title="Composite logic" className="nav-link">
            Composite Logic
          </a>
        </Link>
      </li>
    </>
  );

  const renderMedicalNav = () => (
    <li className={`nav-item ${router.pathname === "/medical" && "active"}`}>
      <Link href="/medical">
        <a title="Medical Information" className="nav-link">
          Medical Information
        </a>
      </Link>
    </li>
  );

  const handleSignOut = () => {
    auth
      .signOut()
      .then(function() {
        router.push("/");
      })
      .catch(function(error) {
        console.log(err);
      });
  };

  const isFamilyMember = user => user?.email === "familymember@family.com";

  const isCareGiver = user => user?.email === "caregiver@care.com";

  // console.log(auth.currentUser.email);

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
          {(isFamilyMember(auth?.currentUser) ||
            isCareGiver(auth?.currentUser)) &&
            renderBasicNav()}
          {isCareGiver(auth?.currentUser) && renderMedicalNav()}
        </ul>
        <div className="my-2 my-lg-0">
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => handleSignOut()}
          >
            Log out
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
