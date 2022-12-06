import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog">
      <div>
        <h2>What is the purpose of react ?</h2>
        <p>
          In English React Router is a standard library for routing in React. It
          enables the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
        </p>
      </div>
      <div>
        <h2> How does context api works?</h2>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div>
        <h2> How does work useRef hook in react?</h2>
        <p>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument ( initialValue ). The returned
          object will persist for the full lifetime of the component.
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property.
        </p>
      </div>
    </div>
  );
};

export default Blog;
