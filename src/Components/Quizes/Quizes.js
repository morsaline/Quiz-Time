import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Quizes.css";

const Quizes = () => {
  const quizes = useLoaderData();
  const { data } = quizes;
  const { name, questions } = data;
  return (
    <div>
      <h1 className="center">The Topic Of Quiz {name}</h1>
      {questions.map((ques, index) => (
        <Question key={ques.id} ques={ques} index={index}></Question>
      ))}
    </div>
  );
};

export default Quizes;
