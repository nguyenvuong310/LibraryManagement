import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import AddBook from "./function/AddBook";
import AllBook from "./function/AllBook";
import AllStudent from "./function/AllStudent";
import { Link } from "react-router-dom";
import IssueRequest from "./function/IssueRequest";
import HomePage from "./function/HomePage";
import AllissuedBook from "./function/AllissuedBook";
import "./Dashboard.scss";
//import Footer from "./function/footer";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isOpenSideBar: false,
    };
  }
  // openSide = () => {
  //   this.setState({
  //     isOpenSideBar: !this.state.isOpenSideBar,
  //   });
  // };
  not = () => {
    alert("Chức năng chưa hoàn thành");
  };
  render() {
    return (
      <div>
        <div className="container-dashboard">
          <div>
            <div className="SideBar">
              <Sidebar />
            </div>
          </div>

          <div className="routers">
            <div className="home-header-container">
              <div className="home-header-content">
                <div className="left-content">
                  <i className="fas fa-bars"></i>
                  <span className="title-lib">LIBARY MANAGEMENT</span>
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
              <Route path="/dashboard/" component={HomePage} exact />
              <Route path="/dashboard/addBook" component={AddBook} exact />
              <Route path="/dashboard/allBook" component={AllBook} exact />
              <Route
                path="/dashboard/manageStudent"
                component={AllStudent}
                exact
              />
              <Route path="/dashboard/issuedBook" component={AddBook} exact />
              <Route
                path="/dashboard/allissuedBook"
                component={AllissuedBook}
                exact
              />
              <Route
                path="/dashboard/stuReqIssue"
                exact
                component={IssueRequest}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
