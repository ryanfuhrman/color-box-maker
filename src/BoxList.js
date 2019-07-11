import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import uuid from "uuid";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };

    this.addBox = this.addBox.bind(this);
  }

  addBox(newBox) {
    this.setState(st => ({
      boxes: [...st.boxes, newBox],
    }));
  }

  render() {
    return (
      <div>
        <h1>Box List</h1>
        <NewBoxForm addBox={this.addBox} />
        {this.state.boxes.map(box => (
          <Box key={uuid()} boxInfo={box} />
        ))}
      </div>
    );
  }
}
