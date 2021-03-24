import React, { Component } from "react";
import FormikOverviewComponent from "./FormikOverviewComponent";

class FormikOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailF: "",
      passwordF: "",
    };
  }

  inputHandler = (event) => {
    try {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FormikOverviewComponent
        {...this.state}
        inputHandler={this.inputHandler}
      />
    );
  }
}

export default FormikOverview;
