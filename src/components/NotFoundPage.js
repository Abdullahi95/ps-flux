import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="jumbotron">
      <h2>Page Not Found</h2>
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
