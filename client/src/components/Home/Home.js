import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {};

  render() {
    return (
      <section className="border p-4 flex justify-end">
        <nav>
          <Link className="pr-4" to="/signin">Sign In</Link>
          <Link className="pl-4" to="/signup">Sign Up</Link>
        </nav>
      </section>
    );
  }
}
