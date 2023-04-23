import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../services/userService";
import "./Sidebar.scss";
import logo from "../assets/logo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  logOut = () => {
    logout();
  };
  setTitle = (data) => {
    console.log(data);
    this.setState({
      title: data,
    });
    console.log(this.state.title);
  };
  render() {
    return (
      <div style={{ marginTop: "10%" }}>
        <ul className="list-func">
          <li className="logo">
            {" "}
            <Link to="/dashboard/">
              {" "}
              <img src={logo} onClick={() => this.setTitle("")}></img>{" "}
            </Link>{" "}
          </li>
          <hr />
          <li
            className={
              this.state.title === "ALLBOOKS" ? "list_item active" : "list_item"
            }
            onClick={() => this.setTitle("ALLBOOKS")}
          >
            {" "}
            <i className="fas fa-address-book text-white"></i>
            <Link to="/dashboard/allBook"> All Books </Link>{" "}
          </li>
          <hr />

          <li
            className={
              this.state.title === "ADDBOOK" ? "list_item active" : "list_item"
            }
            onClick={() => this.setTitle("ADDBOOK")}
          >
            {" "}
            <i className="fas fa-book text-white"></i>
            <Link to="/dashboard/addBook"> Add Book </Link>{" "}
          </li>
          <hr />
          <li
            className={
              this.state.title === "MS" ? "list_item active" : "list_item"
            }
            onClick={() => this.setTitle("MS")}
          >
            {" "}
            <i class="fas fa-user-graduate text-white"></i>
            <Link to="/dashboard/manageStudent"> Manage Student </Link>{" "}
          </li>
          <hr />
          <li
            className={
              this.state.title === "IS" ? "list_item active" : "list_item"
            }
            onClick={() => this.setTitle("IS")}
          >
            {" "}
            <i className="fas fa-registered text-white"></i>
            <Link to="/dashboard/stuReqIssue"> Issue Request </Link>{" "}
          </li>
          <hr />
          <li
            className={
              this.state.title === "AS" ? "list_item active" : "list_item"
            }
            onClick={() => this.setTitle("AS")}
          >
            {" "}
            <i className="fas fa-book text-white"></i>{" "}
            <Link to="/dashboard/allissuedBook"> All Issued Book </Link>{" "}
          </li>
          <hr />

          <li className="list_item" onClick={() => this.logOut()}>
            {" "}
            <i className="fas fa-power-off text-white"></i>
            <span
              style={{
                fontSize: "20px",
                color: "#fff",
                marginLeft: "2px",
                fontFamily: "Oswald",
              }}
            >
              {" "}
              Logout{" "}
            </span>{" "}
          </li>
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
