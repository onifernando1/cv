import React, { Component } from "react";

class Education extends React.Component {
  constructor() {
    super();

    this.state = {
      schoolName: "",
      degree: "",
      dateOfStudy: "",
      show: true,
    };
  }

  display = () => {
    this.setState({ show: false });
  };

  handleChange = (changeTarget, e) => {
    this.setState({ [changeTarget]: e.target.value });
  };

  onSubmitGeneral = (e) => {
    e.preventDefault();
    this.setState(
      {
        schoolName: e.target[0].value,
        degree: e.target[1].value,
        dateOfStudy: e.target[2].value,
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
            <label htmlFor="schoolName">School Name</label>
            <input
              value={this.state.schoolName}
              onChange={(e) => this.handleChange("schoolName", e)}
              type="text"
              id="schoolName"
            ></input>

            <label htmlFor="degree">Degree</label>
            <input
              value={this.state.degree}
              onChange={(e) => this.handleChange("degree", e)}
              type="text"
              id="degree"
            ></input>

            <label htmlFor="dateOfStudy">Date of Study</label>
            <input
              value={this.state.dateOfStudy}
              onChange={(e) => this.handleChange("dateOfStudy", e)}
              type="text"
              id="dateOfStudy"
            ></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <div>Name: {this.state.schoolName}</div>
            <div>Degree: {this.state.degree}</div>
            <div>Date of study: {this.state.dateOfStudy}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
