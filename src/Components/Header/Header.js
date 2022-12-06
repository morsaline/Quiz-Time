import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav className="navbar ">
        <div className="logo">
          <img
            src="https://previews.123rf.com/images/soifer/soifer1809/soifer180900063/110272407-quiz-time-neon-sign-vector-quiz-pub-design-template-neon-sign-light-banner-neon-signboard-nightly-br.jpg?fj=1"
            alt=""
          />
          <h1>
            QUIZ <span className="color"> TIME</span>
          </h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/statistisks">Statistiscs</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </nav>
     
    </div>
  );
};
export default Header;
