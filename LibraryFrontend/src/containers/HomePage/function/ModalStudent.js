import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      userName: "",
      mssv: "",
      rePassword: "",
    };
  }
  componentDidMount() {}
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "name",
      "userName",
      "mssv",
      "rePassword",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("missing parameter " + arrInput[i]);
        break;
      }
    }
    if (this.state.password !== this.state.rePassword) {
      isValid = false;
      alert("diff pass");
    }
    return isValid;
  };
  handleAddNewuser = () => {
    let isValid = this.checkValidInput();
    if (isValid === true) {
      let data = {
        email: this.state.email,
        mssv: this.state.mssv,
        name: this.state.name,
        password: this.state.password,
        username: this.state.userName,
      };
      this.props.createNewUser(data);
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new User
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <lable>Email</lable>
              <input
                type="email"
                placeholder="alo@gmail.com"
                onChange={(event) => this.handleOnChangeInput(event, "email")}
                value={this.state.email}
              ></input>
            </div>
            <div className="input-container ">
              <lable>Name</lable>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "name")}
                value={this.state.name}
              ></input>
            </div>
            <div className="input-container ">
              <lable>MSSV</lable>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "mssv")}
                value={this.state.mssv}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <lable>UserName</lable>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "userName")
                }
                value={this.state.userName}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <lable>Password</lable>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "password")
                }
                value={this.state.password}
              ></input>
            </div>

            <div className="input-container max-width-input">
              <lable>Re-enter Password</lable>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "rePassword")
                }
                value={this.state.rePassword}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="px-3"
            onClick={() => this.handleAddNewuser()}
          >
            Add new
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
