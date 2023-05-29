import React, { Component } from "react";

class General extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      show: true,
    };
  }

  display = () => {
    this.setState({ show: false });
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState(
      {
        name: e.target[0].value,
        email: e.target[1].value,
      },
      () => {
        this.display();
      }
    );
  };

  render() {
    return (
      <div>
        {this.state.show ? (
          <form onSubmit={this.onSubmitGeneral}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"></input>

            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>Name: {this.state.name}</div>
        )}
      </div>
    );
  }
}

export default General;
