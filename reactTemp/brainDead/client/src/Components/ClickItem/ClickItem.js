import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div
    role="img"
    aria-label="click item"
<<<<<<< HEAD
    onClick={(event) => {
      props.timerStart(event)
      props.handleClick(props.id, props.position)
      }}
    style={{ backgroundImage: `url("${props.flipped ? props.image:props.faceDown}")` }}
    className={`click-item col-md-2 pull-left`}
=======
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.image}")` }}
    className={`click-item${props.shake ? " shake" : ""} col-md-4`}
>>>>>>> 78395155e347751ff16c8522ae7139fdb84d65b9
  />
);

export default ClickItem;
