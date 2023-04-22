import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getHomePage } from "../../../services/userService";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="HomePage">
        <div class="w3-row-padding w3-margin-bottom">
          <div class="w3-quarter">
            <div class="w3-container w3-red w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-book w3-xxxlarge"></i>
              </div>
              <div class="w3-right ">
                <h3>100</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Books</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-blue w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-book w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>50</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Issued books</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-teal w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-users w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>100</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Students</h4>
            </div>
          </div>
          <div class="w3-quarter">
            <div class="w3-container w3-orange w3-text-white w3-padding-16">
              <div class="w3-left">
                <i class="fa fa-users w3-xxxlarge"></i>
              </div>
              <div class="w3-right">
                <h3>5</h3>
              </div>
              <div class="w3-clear"></div>
              <h4>Admins</h4>
            </div>
          </div>
        </div>

        <div class="w3-container">
          <div className="title">Thống kê</div>
          <div className="vs">New Visitors</div>
          <div class="w3-grey">
            <div class="w3-container w3-center w3-padding w3-green stat">
              25%
            </div>
          </div>

          <div className="us">New Users</div>
          <div class="w3-grey">
            <div class="w3-container w3-center w3-padding w3-orange stat1">
              50%
            </div>
          </div>

          <div className="book">New Books</div>
          <div class="w3-grey">
            <div class="w3-container w3-center w3-padding w3-red stat2">
              75%
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
