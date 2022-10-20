import React, { Component } from "react";
import Main from "../Main/Main";
import { Link } from "react-router-dom";

export default class App extends Component {
    state = {
        user: {
            role: 'admin',
        },
    }
  render() {
    return (
      <section>
        <nav>
          {this.user?.role === "user" || this.user?.role === "admin" ? (
            <>
              <Link
                to="/"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
        <Main />
      </section>
    );
  }
}
