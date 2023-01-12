import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="textError">
      <h2>Page Not Found!!</h2>
      <Link to="/">Go Back Home </Link>
    </div>
  );
};

export default ErrorPage;
