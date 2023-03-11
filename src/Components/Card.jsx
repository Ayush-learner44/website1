import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card" style={{width:"18rem"}}>
        <img src={props.imgsrc} className="img-fluid card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.text}
          </p>
          <NavLink to='/' className="btn btn-primary">
           Home
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
