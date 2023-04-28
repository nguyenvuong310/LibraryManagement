import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {
  studentLogin,
  findStudentByMssv,
  findStudentByEmail,
} from "../../../services/userService";
import { toast } from "react-toastify";
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
      faculty: "",
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
      "faculty",
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
      alert("passwords are not the same");
    }
    return isValid;
  };
  handleAddNewuser = async () => {
    let isValid = this.checkValidInput();
    if (isValid === true) {
      let res = await studentLogin(this.state.userName);
      let resStudent = await findStudentByMssv(this.state.mssv);
      let resEmail = await findStudentByEmail(this.state.email);
      if (resEmail.data.length >= 1) {
        alert("Email exist");
        return;
      }
      if (resStudent.data.length >= 1) {
        alert("MSSV exist");
        return;
      }
      console.log(res);
      if (res.data.length < 1) {
        let data = {
          email: this.state.email,
          mssv: this.state.mssv,
          name: this.state.name,
          password: this.state.password,
          username: this.state.userName,
          faculty: this.state.faculty,
        };
        console.log(data);
        this.props.createNewUser(data);
        this.setState({
          email: "",
          password: "",
          name: "",
          userName: "",
          mssv: "",
          rePassword: "",
          faculty: "",
        });
        toast.success("You have successfully registered !!");
        this.toggle();
      } else {
        alert("account exist");
      }
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
          Register Account For Student
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <label>Email</label>
              <input
                type="email"
                placeholder="alo@gmail.com"
                onChange={(event) => this.handleOnChangeInput(event, "email")}
                value={this.state.email}
              ></input>
            </div>
            <div className="input-container ">
              <label>Name</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "name")}
                value={this.state.name}
              ></input>
            </div>
            <div className="input-container ">
              <label>MSSV</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "mssv")}
                value={this.state.mssv}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Faculty</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "faculty")}
                value={this.state.faculty}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>UserName</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "userName")
                }
                value={this.state.userName}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "password")
                }
                value={this.state.password}
              ></input>
            </div>

            <div className="input-container max-width-input">
              <label>Re-enter Password</label>
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
            className="px-3 btn-create"
            onClick={() => this.handleAddNewuser()}
          >
            Register
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
