import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Home.css";
const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <div className="head-container">
        <h1>Lets Grow Up Your Knowledge With Down Below Topics .</h1>
      </div>
      <div className="home-section">
        {data.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
