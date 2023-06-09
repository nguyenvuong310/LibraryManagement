import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import {
  getAllRequestIssue,
  delRequestIssue,
  saveBookIssue,
  editBook,
  decreaseNumBook,
  findBook,
} from "../../../services/userService";

class IssueRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIssuedBook: [],
    };
  }
  async componentDidMount() {
    this.getAllIssue();
  }
  getAllIssue = async () => {
    let res = await getAllRequestIssue();
    this.setState({
      newIssuedBook: res.data,
    });
  };
  accept = async (book) => {
    console.log(book);
    // let data = book;
    // console.log("check", data);
    //
    let res = await findBook(book.bookName);
    if (res.data.length == 0) {
      alert("The book is no longer in the library");
      await delRequestIssue(book.id);
      this.getAllIssue();
    } else {
      res = res.data[0];
      await decreaseNumBook(res.id, res);
      await delRequestIssue(book.id);
      this.getAllIssue();
      await saveBookIssue(book);
    }
  };
  reject = async (book) => {
    await delRequestIssue(book.id);
    this.getAllIssue();
  };
  render() {
    const { newIssuedBook } = this.state;
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
          STUDENT REQUESTED TO ADMIN TO ISSUE THESE BOOK
        </p>
        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>MSSV</th>
              <th>Student Name</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newIssuedBook &&
              newIssuedBook.map((book) => {
                return (
                  <tr key={book.id}>
                    <td>{book.mssv}</td>
                    <td>{book.studentName}</td>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>

                    <td>
                      <button
                        onClick={() => this.accept(book)}
                        className="btn btn-success"
                      >
                        Accept
                      </button>{" "}
                      {"  "}
                      <button
                        onClick={() => this.reject(book)}
                        className="btn btn-danger"
                      >
                        Reject
                      </button>
                    </td>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueRequest);
