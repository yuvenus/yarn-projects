import React from "react";
import "./GridItem.css"

const gridItem = (props) => {
  return (<div className="grid-item">
      <img src={props.imageUrl} alt={props.alt}></img>
    </div>);
};

export default gridItem;
