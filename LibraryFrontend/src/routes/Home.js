import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logoBK.png";
import "./Home.scss";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-background">
          <div className="home-container">
            <div className="home-content">
              <div className="logoBK">
                <img src={logo} className="logobk"></img>
              </div>
              <div class="login-divider"></div>
              <div className="login-iden">
                <h2 class="login-heading">Log in using your account on:</h2>
                <Link className="btn btn-block login-with" to="/adminLogin">
                  Admin
                </Link>
                <Link className="btn btn-block login-with" to="/login">
                  Student
                </Link>
              </div>
              <div class="login-divider"></div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
