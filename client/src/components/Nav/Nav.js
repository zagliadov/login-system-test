import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeToken, verifyToken } from "../../features/counter/authSlice";
import { withNavigate } from "../../helper/helper";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateRoute() {
    if (localStorage.getItem("token")) {
      return (
        <Link className="pl-4" to="/" onClick={this.props.removeToken}>
          Sign Out
        </Link>
      );
    } else {
      return (
        <Link className="pl-4" to="/signup">
          Sign Up
        </Link>
      );
    }
  }
  
  protectedRoute() {
    if (localStorage.getItem("token")) {
      return (
        <Link
          onClick={this.props.verifyToken(localStorage.getItem("token"))}
          className="pr-4"
          to="/private"
        >
          Private
        </Link>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <section className="border p-4 flex justify-end">
        <nav>
          {this.protectedRoute()}
          <Link className="pr-4" to="/signin">
            Sign In
          </Link>
          {this.updateRoute()}
        </nav>
      </section>
    );
  }
}

export default withNavigate(connect(null, { removeToken, verifyToken })(Nav));
