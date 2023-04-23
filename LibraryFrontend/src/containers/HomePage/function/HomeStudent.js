import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
// import { getAllStudent, delStu } from "../../../services/userService";
import "./function.scss";
import Image from "../../../assets/face.jpg";
class HomeStudent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      students: [],
      status: "",
    };
  }
  componentDidMount() {
    let student = [];
    setTimeout(() => {
      student = this.props.userInfo;
      this._isMounted = true;
      this._isMounted && this.getInfor(student);
    }, 100);
  }
  getInfor = (studenInfor) => {
    this.setState({
      students: studenInfor,
    });
  };
  render() {
    const { students } = this.state;
    return (
      <div className="col-md-4 m-auto">
        <div className="card mt-2 ">
          <div className="image">
            <img
              src={Image}
              alt="mohen mondal"
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
                marginLeft: "23%",
                marginTop: "10px",
                marginBottom: "20px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div className="text-container">
            <div className="text-title">
              <span className="label-text">Email </span>
              <span className="content-text">: {students.email}</span>
            </div>
            <div className="text-title">
              <span className="label-text">Name </span>
              <span className="content-text">: {students.name}</span>
            </div>
            <div className="text-title">
              <span className="label-text">MSSV </span>
              <span className="content-text">: {students.mssv}</span>
            </div>
          </div>
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
