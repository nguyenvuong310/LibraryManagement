import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import { getAllStudent, delStu } from "../../../services/userService";
import Image from "../../../assets/profile2.png";
class HomeStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
  async componentDidMount() {}
  render() {
    return (
      <div className="col-md-4 m-auto">
        <div className="card mt-2">
          <img
            src={Image}
            alt="mohen mondal"
            style={{
              height: "250px",
              width: "250px",
              borderRadius: "50%",
              marginLeft: "23%",
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeStudent);
