import React from "react";
import Option from "../Option/Option";
import "./Question.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Question = ({ ques, index }) => {
  const { question, correctAnswer, id, options } = ques;
  const showCorrectAnswer = () => {
    toast.success(` 🦄     ANSWER :    ${correctAnswer}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleCorrectAnswer = (option) => {
    if (option === correctAnswer) {
      toast.success(`🦄 CORRECT ANSWER !`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error(`🦄 WRONG ANSWER !`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div className="quiz">
      <div className="flex">
        <h2>
          QUiZ {index + 1}: {question}
        </h2>
        <i onClick={showCorrectAnswer} className="fa-solid fa-eye eye"></i>
      </div>
      <div className="option">
        {options.map((opt, index) => (
          <Option
            handleCorrectAnswer={handleCorrectAnswer}
            key={index}
            index={index}
            opt={opt}
          ></Option>
        ))}
      </div>
    </div>
  );
};

export default Question;
