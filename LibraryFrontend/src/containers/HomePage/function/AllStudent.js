import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getAllStudent, delStu } from "../../../services/userService";
import { toast } from "react-toastify";

class allStudent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      students: [],
    };
  }
  async componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getAllStudentService();
  }
  getAllStudentService = async () => {
    try {
      let res = await getAllStudent();
      console.log(res);
      this.setState({
        students: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleDelBook = async (data) => {
    await delStu(data.id);
    toast.success("Delete Student succeed!");
    this.getAllStudentService();
  };
  render() {
    const { students } = this.state;
    return (
      <div>
        <div className="col-md-10 m-auto">
          <h3
            className="text-center bg-info p-2"
            style={{ fontFamily: "sans-serif" }}
          >
            ALL STUDENTS IN LIBRARY
          </h3>
          <br />
        </div>

        <div className="col-md-10 m-auto">
          <table
            className="table table-bordered table-responsive-sm"
            style={{ marginTop: "20px" }}
          >
            <thead className="thead-dark">
              <tr>
                <th>MSSV</th>
                <th>Email</th>
                <th>Name</th>
                <th>Faculty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((student, index) => {
                  return (
                    <tr key={student._id}>
                      <td>{student.mssv}</td>

                      <td>{student.email}</td>
                      <td>{student.name}</td>
                      <td>{student.faculty}</td>
                      <td>
                        <button
                          className="btn-del"
                          onClick={() => this.handleDelBook(student)}
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(allStudent);
