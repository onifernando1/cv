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
            <input type="text" id="schoolName"></input>

            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree"></input>

            <label htmlFor="dateOfStudy">Date of Study</label>
            <input type="text" id="dateOfStudy"></input>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <div>Name: {this.state.schoolName}</div>
            <div>Email: {this.state.degree}</div>
            <div>Phone Number: {this.state.dateOfStudy}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
