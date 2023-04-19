import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getHomePage } from "../../../services/userService";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="HomePage">
        <div className="homepage-banner"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
