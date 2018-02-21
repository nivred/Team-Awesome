import React from "react";
import "./ClickItem.css";

const ClickItem = props => (
  <div
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    style={{ backgroundImage: `url("${props.flipped ? props.image:props.faceDown}")` }}
    className={`click-item${props.shake ? " shake" : ""} col-md-2 pull-left`}
  />
);

export default ClickItem;
