import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Enter name" />
        <br />
        <button>Submit</button>
      </div>
    );
  }
}
