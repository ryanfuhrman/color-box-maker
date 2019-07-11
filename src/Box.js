import React, { Component } from "react";

export default class Box extends Component {
  render() {
    const { backgroundColor, height, width } = this.props.boxInfo;

    return (
      <div
        style={{
          backgroundColor: backgroundColor,
          height: `${height}px`,
          width: `${width}px`,
        }}
      />
    );
  }
}
