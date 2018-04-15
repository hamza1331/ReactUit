import React from "react";
import Form from './Form'
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Hello from App component</h2>
          <Form/>
      </div>
    );
  }
}
