import React, { Component } from "react";

class Experience extends React.Component {
  constructor() {
    super();

    this.state = {
      companyName: "",
      title: "",
      mainTasks: "",
      dateOfWork: "",
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
        companyName: e.target[0].value,
        title: e.target[1].value,
        mainTasks: e.target[2].value,
        dateOfWork: e.target[3].value,
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
            <label htmlFor="companyName">Company Name</label>
            <input
              value={this.state.companyName}
              onChange={(e) => this.handleChange("companyName", e)}
              type="text"
              id="companyName"
            ></input>

            <label htmlFor="title">Job Title</label>
            <input
              value={this.state.title}
              onChange={(e) => this.handleChange("title", e)}
              type="text"
              id="title"
            ></input>

            <label htmlFor="mainTasks">Main Tasks</label>
            <input
              value={this.state.mainTasks}
              onChange={(e) => this.handleChange("mainTasks", e)}
              type="text"
              id="mainTasks"
            ></input>

            <label htmlFor="dateOfWork">Date of work</label>
            <input
              value={this.state.dateOfWork}
              onChange={(e) => this.handleChange("dateOfWork", e)}
              type="text"
              id="dateOfWork"
            ></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h3>Experience</h3>
            <button onClick={this.edit}>Edit</button>
            <div>Company: {this.state.companyName}</div>
            <div>Degree: {this.state.title}</div>
            <div>Main tasks: {this.state.mainTasks}</div>
            <div>Date of work: {this.state.dateOfWork}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
