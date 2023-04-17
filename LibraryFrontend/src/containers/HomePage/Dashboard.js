import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route } from "react-router-dom";
// import "./Dashboard.scss";
// import adminService from "../services/adminService";
import Header from "../Header/Header";
import Sidebar from "../../components/Sidebar";
import AddBook from "./function/AddBook";
import AllBook from "./function/AllBook";
import AllStudent from "./function/AllStudent";

import "./Dashboard.scss";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container-dashboard">
          <div className="SideBar">
            <Sidebar />
          </div>

          <div style={{ height: "940px", marginLeft: "10px", width: "80%" }}>
            <Switch>
              <Route path="/dashboard/" component={AddBook} exact />
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
                component={AddBook}
                exact
              />
              <Route path="/dashboard/RecomBook" component={AddBook} exact />
              <Route
                path="/dashboard/Recommandation"
                component={AddBook}
                exact
              />
              <Route path="/dashboard/stuReqIssue" exact component={AddBook} />
              <Route path="/dashboard/issue_return" exact component={AddBook} />
              <Route path="/dashboard/returnBook" exact component={AddBook} />
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
