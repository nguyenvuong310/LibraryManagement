import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { getAllBookByStudent } from "../../../services/userService";

class AllIssuedBookStudent extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      IssuedBook: [],
      status: "",
      userInfo: "",
    };
  }
  async componentDidMount() {
    let mssv = "";
    setTimeout(() => {
      mssv = this.props.userInfo.mssv;
      this._isMounted = true;
      this._isMounted && this.getAllIssue(mssv);
    }, 100);
  }
  getAllIssue = async (mssv) => {
    let res = await getAllBookByStudent(mssv);
    console.log(this.props.userInfo);
    if (res) {
      this.setState({
        IssuedBook: res.data,
        status: "AVAILABLE",
      });
      console.log(res);
    } else {
      this.setState({
        status: "NULL",
      });
    }
  };

  render() {
    const { IssuedBook, status } = this.state;
    return (
      <div className="col-md-10 m-auto">
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "30px",
            textAlign: "center",
            padding: "10px",
          }}
        >
          ALL BOOKS BORROWED
        </p>

        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Borrowing Date</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {IssuedBook &&
              IssuedBook.map((book) => {
                return (
                  <tr key={book.id}>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>
                    <td>{book.createdAt}</td>
                    <td>1</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllIssuedBookStudent);
