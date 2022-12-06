import React from "react";
import { Link } from "react-router-dom";
import "./ErrorElement.css";
const ErrorElement = () => {
  return (
    <div className="error">
      <span>404</span>
      <p>NOT FOUND !</p>
      <Link to="/">
        <button>Back TO Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorElement;
