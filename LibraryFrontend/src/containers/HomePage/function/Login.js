import React, { Component } from "react";
import { connect } from "react-redux";

import "./login.scss";
import ModalStudent from "./ModalStudent";
import { createNewStudent } from "../../../services/userService";
// import adminService from "../services/adminService";
import { studentLogin } from "../../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
      isOpenModalStudent: false,
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
  handleLogin = async () => {
    let isValid = this.checkValidInput();
    if (isValid) {
      let res = await studentLogin(this.state.userName);
      if (res.data.length === 0) {
        this.setState({
          errMessage: "username not valid",
        });
      } else {
        if (res.data[0].password === this.state.password) {
          window.location.href = "/dashboard";
        } else {
          this.setState({
            errMessage: "wrong password",
          });
        }
      }
    }
    //
  };
  handleRegister = async (data) => {
    await createNewStudent(data);
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
  handleAddNewStudent = () => {
    this.setState({
      isOpenModalStudent: true,
    });
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalStudent: !this.state.isOpenModalStudent,
    });
  };
  render() {
    return (
      <div>
        <ModalStudent
          // truyen function cho modalUser
          isOpen={this.state.isOpenModalStudent}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.handleRegister}
          //
        />
        <div className="Login-background">
          <div className="Login-container">
            <div className="Login-content">
              <div className="col-12 text-Login">
                Enter your UserName and Password{" "}
              </div>
              <div className="col-12 form-group Login-input">
                <label>UserName</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your name"
                  value={this.state.userName}
                  onChange={(event) => this.handleOnChangeUserName(event)}
                ></input>
              </div>
              <div className="col-12 form-group Login-input">
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
                  className="btn-Login"
                  onClick={() => this.handleLogin()}
                >
                  Login
                </button>
              </div>
              <div className="col-12">
                <span className="forgot-password">Forgot your password ?</span>
              </div>
              <span onClick={() => this.handleAddNewStudent()}>
                If you don't have account then plz Register
              </span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
