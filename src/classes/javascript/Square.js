import React from "react";

// Note that JavaScript does not have types so it's hard to determine what props are until runtime
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
