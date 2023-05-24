import React, { Component } from "react";

class General extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
    };
  }

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target[0].value,
      email: e.target[1].value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitGeneral}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>

          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
