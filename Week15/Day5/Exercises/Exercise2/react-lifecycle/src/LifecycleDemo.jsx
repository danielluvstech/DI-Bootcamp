import React from "react";

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null; // we're not modifying state from props here
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true; // allow the update
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return `Previous count: ${prevState.count}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(snapshot); // value returned from getSnapshotBeforeUpdate
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h2>Lifecycle Updating Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}

export default LifecycleDemo;
