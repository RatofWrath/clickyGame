import React from "react";
import "./style.css";

function Title(props) {
  return <div>
  <h1 className="title">{props.children}</h1>
  <h3 className="title">Score: {props.score}</h3>
  <h3 className="title">High score: {props.topScore}</h3>
  </div>
}

export default Title;
