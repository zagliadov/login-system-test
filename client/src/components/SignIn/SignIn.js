import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../features/counter/authSlice";

class SignIn extends Component {
  state = {
    email: null,
    password: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.login({
        email: this.state.email,
        password: this.state.password,
      });
    }
  };

  render() {
    return (
      <section className="border flex flex-col justify-center p-5">
        <p className="flex justify-center p-4">Sing In</p>
        <form onSubmit={this.handleSubmit} className="border p-2 flex flex-col items-center">
          <input
            className="border p-2"
            type="text"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            className="border p-2 mt-3"
            type="text"
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input className="mt-2 border w-44" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

export default connect(null, { login })(SignIn);
