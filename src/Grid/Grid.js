import React, { Component } from "react";
import "./Grid.css";
import GridItem from "./GridItem/GridItem";
import projects from "../projects"

class Grid extends Component {
  render() {
    return <div className="grid">
      {projects.map(m => <GridItem imageUrl={m.imageUrl} alt={m.alt}/>)}
    </div>
  }
}

export default Grid;
