import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import SidebarStudent from "../../components/SidebarStudent";

import AllBookStudent from "./function/AllBookStudent";
import HomeStudent from "./function/HomeStudent";
import { Link } from "react-router-dom";
import AllissuedBookStudent from "./function/AllissuedBookStudent";

class DashboardStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  not = () => {
    alert("Chức năng chưa hoàn thành");
  };
  render() {
    return (
      <div>
        <div className="container-dashboard">
          <div>
            <div className="SideBar">
              <SidebarStudent />
            </div>
          </div>

          <div className="routers">
            <div className="home-header-container">
              <div className="home-header-content">
                <div className="left-content">
                  <i className="fas fa-bars"></i>
                  <Link to="/dashboard-student/" className="title-lib">
                    <span>LIBARY SYSTEM</span>
                  </Link>{" "}
                </div>
                <div className="center-content"></div>
                <div className="right-content">
                  <div className="search">
                    <input type="text" placeholder="Search" />
                    <i
                      className="fas fa-search search1"
                      onClick={() => this.not()}
                    ></i>
                  </div>
                  <div className="bell">
                    <i className="far fa-bell" onClick={() => this.not()}></i>
                  </div>
                  <div className="setting">
                    <i className="fas fa-cog" onClick={() => this.not()}></i>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
              <Route path="/dashboard-student/" component={HomeStudent} exact />
              <Route
                path="/dashboard-student/allBook-student"
                component={AllBookStudent}
                exact
              />

              <Route
                path="/dashboard-student/allissuedBook-student"
                component={AllissuedBookStudent}
                exact
              />
            </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStudent);
