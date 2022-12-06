import React from "react";
import "./option.css";
const Option = ({ index, opt, handleCorrectAnswer }) => {
  return (
    <div className="opt">
      <input type="radio" name="x" id={opt} />
      <label onClick={() => handleCorrectAnswer(opt)} htmlFor={opt}>
        {opt}
      </label>
    </div>
  );
};

export default Option;
