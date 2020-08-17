import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      {/* <Link
        to={{
          pathname: "/about",
          state: {
            fromNavigation: true,
          },
        }}
      >
        about
      </Link> */}
    </div>
  );
}

export default Navigation;
