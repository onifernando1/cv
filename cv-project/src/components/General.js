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
            <input type="text" id="name"></input>

            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>

            <label htmlFor="phone">Phone</label>
            <input type="number" id="phone"></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
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
