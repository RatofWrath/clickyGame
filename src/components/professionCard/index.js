import React from "react";
import "./style.css";

const ProfessionCard = (props) =>
<div className="card" onClick={() => props.clickHandler(props.id)}>
<div className="img-container">
  <img alt={props.name} src={props.image} />
</div>
<div className="content">
  <ul>
    <li>
      <strong>Name:</strong> {props.name}
    </li>
    
  </ul>
</div>
</div>

/*function ProfessionCard(props) {
  return (
    <div className="card" onClick={() => props.clickHandler(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          
        </ul>
      </div>
    </div>
  );
}*/

export default ProfessionCard;
