import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_header = {
      color: 'black',
      backgroundColor: 'white',
      fontFamily: 'Arial',
      textAlign: 'center',
      marginBottom: '20px'
    };

    return (
      <div className="container">
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">This is a Link</a>

        <h3>This is a Form:</h3>
        <form>
          <label htmlFor="name">Enter your name:</label><br />
          <input type="text" id="name" name="name" /><br />
          <button type="submit">Submit</button>
        </form>

        <h3>Here is an Image:</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          className="react-img"
        />

        <h3>This is a List:</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;

