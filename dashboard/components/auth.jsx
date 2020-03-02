import { useState, useEffect } from "react";
import router from "next/router";
import { auth } from "../config";
import { Spinner } from "react-bootstrap";

const withAuth = Component => {
  return () => {
    const [status, setStatus] = useState("LOADING");

    useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          setStatus("SIGNED_IN");
        } else {
          router.push("/");
        }
      });
    }, []);

    return (
      <>
        {status === "LOADING" ? (
          <Spinner animation="grow" />
        ) : (
          <Component>TEST</Component>
        )}
      </>
    );
  };
};
export default withAuth;
