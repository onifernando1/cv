import React, { Component } from "react";

class General extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      show: true,
    };
  }

  display = () => {
    this.setState({ show: false });
  };

  edit = () => {
    this.setState({ show: true });
  };

  handleChange = (changeTarget, e) => {
    this.setState({ [changeTarget]: e.target.value });
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState(
      {
        name: e.target[0].value,
        email: e.target[1].value,
        phone: e.target[2].value,
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
            <input
              value={this.state.name}
              onChange={(e) => this.handleChange("name", e)}
              type="text"
              id="name"
            ></input>

            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => this.handleChange("email", e)}
              value={this.state.email}
              type="email"
              id="email"
            ></input>

            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone"></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h3>About Me</h3>
            <button onClick={this.edit}>Edit</button>
            <div>Name: {this.state.name}</div>
            <div>Email: {this.state.email}</div>
            <div>Phone Number: {this.state.phone}</div>
          </div>
        )}
      </div>
    );
  }
}

export default General;
