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
      isOpenSideBar: false,
    };
  }
  // openSide = () => {
  //   this.setState({
  //     isOpenSideBar: !this.state.isOpenSideBar,
  //   });
  // };
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
                  <span>LIBARY MANAGEMENT</span>
                </div>
                <div className="center-content"></div>
                <div className="right-content">
                  <div className="search">
                    <input type="text" placeholder="Search" />
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="bell">
                    <i className="far fa-bell"></i>
                  </div>
                  <div className="setting">
                    <i className="fas fa-cog"></i>
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
              <Route path="/dashboard/issue_return" exact component={AddBook} />
              <Route path="/dashboard/returnBook" exact component={AddBook} />
            </Switch>
            <div className="footer">
              <span className="txt">© 2023 Library Management System</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
