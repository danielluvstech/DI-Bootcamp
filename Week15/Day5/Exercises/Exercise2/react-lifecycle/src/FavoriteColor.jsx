import React from "react";

class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return `Previous color was ${prevState.favoriteColor}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
    console.log(snapshot); // Value returned from getSnapshotBeforeUpdate
    console.log(`Current color: ${this.state.favoriteColor}`);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3>My favorite color is {this.state.favoriteColor}</h3>
      </div>
    );
  }
}

export default FavoriteColor;



