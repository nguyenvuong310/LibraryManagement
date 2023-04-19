import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { getAllBook, delBook } from "../../../services/userService";

class IssueRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newIssuedBook: [],
    };
  }
  async componentDidMount() {}

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
          Student Requested to Admin to issue these Book
        </p>
        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Student Name</th>
              <th>Student Branch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {newIssuedBook &&
              newIssuedBook.map((book) => {
                return (
                  <tr key={book._id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.userName}</td>
                    <td>{book.userBranch}</td>

                    <td>
                      <button
                        // onClick={() =>
                        //   dispatch(issuedReq(book._id, book.bookId))
                        // }
                        className="btn btn-success"
                      >
                        Accepted
                      </button>{" "}
                      {"  "}
                      <button
                        // onClick={() =>
                        //   dispatch(issuedReqDeletedByAdmin(book._id))
                        // }
                        className="btn btn-danger"
                      >
                        Rejected
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
