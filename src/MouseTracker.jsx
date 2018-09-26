import React, { Component } from "react";

function Cat(props) {
  return (
    <div>
      from Cat - {props.mouse.x},{props.mouse.y}
    </div>
  );
}

function Cheetah(props) {
  return (
    <div>
      from Cheetah - {props.mouse.x},{props.mouse.y}
    </div>
  );
}

class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  };

  handleMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around</h1>
        {this.props.render({ x: this.state.x, y: this.state.y })}
      </div>
    );
  }
}

class MouseTracker extends Component {
  render() {
    // Here I can pass any component instead of Cat dynamically.
    // So, achieving the code reusability.
    return (
      <div>
        <Mouse render={mouseposition => <Cat mouse={mouseposition} />} />
        <Mouse render={mouseposition => <Cheetah mouse={mouseposition} />} />
      </div>
    );
  }
}

export { MouseTracker };
