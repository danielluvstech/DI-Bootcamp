import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  deleteHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        {this.state.show && <Child />}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default App;

