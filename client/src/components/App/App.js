import React, { Component } from "react";
import Main from "../Main/Main";

export default class App extends Component {
  state = {
    user: {
      role: "admin",
    },
  };
  render() {
    return (
      <section>
        <Main />
      </section>
    );
  }
}
