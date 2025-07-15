import React, { Component } from "react";
import data from "../data.json";

class Example1 extends Component {
  render() {
    return (
      <div>
        <h4 style={{ color: "crimson" }}>Example1 Component</h4>
        <ul>
          {data.SocialMedias.map((link, i) => (
            <li key={i}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
