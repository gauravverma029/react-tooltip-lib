import React, { Component } from "react";

import Tooltip from "react-tooltip-lib";

const TestComponent = function() {
  return <div>Hello ToolTip</div>;
};
export default class App extends Component {
  render() {
    const props = this.props;

    return (
      <div style={{ position: "absolute", top: "10%", left: "50%" }}>
        <Tooltip {...props} />
      </div>
    );
  }
}
