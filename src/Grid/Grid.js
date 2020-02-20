import React, { Component } from "react";
import GridItem from "./GridItem/GridItem";
import projects from "../projects"

class Grid extends Component {
  render() {
    return projects.map(m => <GridItem imageUrl={m.imageUrl} alt={m.alt}/>);
  }
}

export default Grid;
