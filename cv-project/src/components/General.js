import React, { Component } from "react";

class General extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>

          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>

          <label htmlFor="password">Name</label>
          <input type="password" id="password"></input>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default General;
