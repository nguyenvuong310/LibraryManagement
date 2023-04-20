import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";

import "./function.scss";
import logoAdmin from "../../../assets/admin2.jpg";
// import adminService from "../services/adminService";

class adminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }
  handleOnChangeUserName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleadminLogin = async () => {
    let isValid = this.checkValidInput();
    if (isValid) {
      if (this.state.userName === "admin") {
        if (this.state.password === "123456") {
          window.location.href = "/dashboard";
        } else {
          this.setState({
            errMessage: "Username or password incorrect",
          });
        }
      } else {
        this.setState({
          errMessage: "Username or password incorrect",
        });
      }
    }
  };
  checkValidInput = () => {
    let isValid = true;
    let arrInput = ["userName", "password"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Vui long nhap " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  render() {
    return (
      <div>
        <div className="adminLogin-background">
          <div className="adminLogin-container">
            <div className="adminLogin-content">
              <div className="logo">
                <div className="logoBK">
                  <img src={logoAdmin} className="logo-admin"></img>
                </div>
              </div>

              <div className="col-12 form-group adminLogin-input">
                <label>UserName</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.userName}
                  onChange={(event) => this.handleOnChangeUserName(event)}
                ></input>
              </div>
              <div className="col-12 form-group adminLogin-input">
                <label>Password</label>
                <div className="custom-input-password">
                  <input
                    className="form-control"
                    type={this.state.isShowPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={this.state.password}
                    onChange={(event) => this.handleOnChangePassword(event)}
                  ></input>
                  <span
                    onClick={() => {
                      this.handleShowHidePassword();
                    }}
                  >
                    <i
                      class={
                        this.state.isShowPassword
                          ? "fas fa-eye"
                          : "fas fa-eye-slash"
                      }
                    ></i>
                  </span>
                </div>
              </div>
              <div className="col-12" style={{ color: "red" }}>
                {this.state.errMessage}
              </div>
              <div className="col-12">
                <button
                  className="btn-adminLogin"
                  onClick={() => this.handleadminLogin()}
                >
                  Login
                </button>
              </div>
              <div className="col-12 forgot">
                <span className="forgot-password">Forgot your password ?</span>
              </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(adminLogin);
