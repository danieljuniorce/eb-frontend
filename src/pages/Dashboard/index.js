import React, { Component } from "react";

import { logout } from "../../auth";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
