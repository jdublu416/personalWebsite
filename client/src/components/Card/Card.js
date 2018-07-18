import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.title} src={props.imageSrc} />
    </div>
    <div className="content">
      <ul>
        <li className="cardTitle">
          <strong>Title:</strong> {props.title}
        </li>
        <li>
          <strong>Technology:</strong> {props.description}
        </li>
        <li>
          <strong>Overview:</strong> {props.synopsis}
        </li>
        <li>
          <strong>Link:</strong> <a href={props.aSrc}>Click here to visit site</a>
        </li>
        <li>
          <strong>Source Code:</strong> <a href={props.aSrc}>View on gitHub</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
