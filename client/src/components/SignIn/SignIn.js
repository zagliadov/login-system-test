import React, { Component } from "react";
import { connect } from "react-redux";
import { login, getStatus } from "../../features/counter/authSlice";
import { withNavigate } from "../../helper/helper";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: null,
    };
  }

  componentDidMount() {
    localStorage.removeItem("token");
  };

  // componentDidUpdate() {
  //   if (this.props.token) {
  //     this.setState({message: ";sdfkjaskl"})
  //   } 
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      this.props.login({
        email: this.state.email,
        password: this.state.password,
      });
    };
    this.setState({email: null, password: null});
    console.log(this.props.status)
  };

  render() {
    return (
      <section className="border flex flex-col justify-center p-5">
        <p className="flex justify-center p-4">Sing In</p>
        <form onSubmit={this.handleSubmit} className="border p-2 flex flex-col items-center">
          <input
            className="border p-2"
            type="text"
            value={this.state.email || ""}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            className="border p-2 mt-3"
            type="text"
            value={this.state.password || ""}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <input className="mt-2 border w-44" type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}
function mapStateToProps(state) {
  return {
    token: state.counter.token,
    status: state.counter.status,
  };
};
export default withNavigate(connect(mapStateToProps, { login })(SignIn));
