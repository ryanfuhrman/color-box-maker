import React, { Component } from "react";
import "./Box.css";
export default class Box extends Component {
  handleClick = () => {
    this.props.removeBox(this.props.id);
  };

  render() {
    const { backgroundColor, height, width } = this.props.boxInfo;

    return (
      <div className="Box">
        <div
          style={{
            backgroundColor: backgroundColor,
            height: `${height}px`,
            width: `${width}px`,
          }}
        />
        <button onClick={this.handleClick}>x</button>
      </div>
    );
  }
}
