import React, { Component } from "react";
import data from "../data.json";

class Example3 extends Component {
  render() {
    return (
      <div>
        <h4 style={{ color: "crimson" }}>Example3 Component</h4>
        {data.Experiences.map((exp, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <img
              src={exp.logo}
              alt="Company Logo"
              width={100}
              style={{ borderRadius: "50%" }}
            />
            <div>
              <a href={exp.url} target="_blank" rel="noopener noreferrer">
                {exp.companyName}
              </a>
              <br />
              {exp.roles.map((role, i) => (
                <div key={i}>
                  <strong>{role.title}</strong>
                  <p>{role.startDate} - {role.endDate} | {role.location}</p>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
