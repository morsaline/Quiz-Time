import React from "react";
import "./Topic.css";
import { Link } from "react-router-dom";
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div className="topic-section">
      <img src={logo} alt="" />
      <h1>{name}</h1>
      <p>Total Quiz : {total}</p>
      <Link to={`/quiz/${id}`}>
        <button>
          Start Quiz <i className="fa-solid fa-arrow-right"></i>
        </button>
      </Link>
    </div>
  );
};

export default Topic;
