import React from "react";
import "../styles/about.css";
import Self from "../images/Self.png";

export default function About() {
  return (
    <div className = ".about-me">
      <h1 className="page-todo">About Me</h1>
      <img
        className="about-me-img"
        src={Self}
        alt="Headshot of Stephanie Johansson"
      />
      <p className="about-me-p">
          Loremipsum 50


      </p>
    </div>
  );
}