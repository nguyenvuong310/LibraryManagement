import React, { Component } from "react";
import { connect } from "react-redux";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">
          Libary Management System
        </a>
        {/* <p style={{textAlign:"center",marginRight:"10%",fontFamily:"sans-serif",fontSize:"24px"}}> */}
        {/* <i className="far fa-user "></i> { " "}{ currentUser && currentUser.user.name.split(" ")[0]}</p> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
