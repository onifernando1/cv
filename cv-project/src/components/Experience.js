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
            <input type="text" id="companyName"></input>

            <label htmlFor="title">Job Title</label>
            <input type="text" id="title"></input>

            <label htmlFor="mainTasks">Main Tasks</label>
            <input type="text" id="mainTasks"></input>

            <label htmlFor="dateOfWork">Date of work</label>
            <input type="text" id="dateOfWork"></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
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
