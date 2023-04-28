import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import {
  getAllIssuedBook,
  delIssuedBooks,
} from "../../../services/userService";

class AllIssuedBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      IssuedBook: [],
    };
  }
  async componentDidMount() {
    this.getAllIssue();
  }
  getAllIssue = async () => {
    let res = await getAllIssuedBook();
    console.log(res);
    this.setState({
      IssuedBook: res.data,
    });
  };
  delIssuedBookService = async (data) => {
    await delIssuedBooks(data.id);
    this.getAllIssue();
  };

  render() {
    const { IssuedBook } = this.state;
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
          ALL BOOKS LOANED
        </p>
        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>MSSV</th>
              <th>Student Name</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {IssuedBook &&
              IssuedBook.map((book) => {
                return (
                  <tr key={book._id}>
                    <td>{book.bookName}</td>
                    <td>{book.author}</td>
                    <td>{book.mssv}</td>
                    <td>{book.studentName}</td>
                    <td>{book.createdAt}</td>
                    <td>{1}</td>
                    <td>
                      {"  "}
                      <button
                        // onClick={() =>
                        //   dispatch(issuedReqDeletedByAdmin(book._id))
                        // }
                        onClick={() => this.delIssuedBookService(book)}
                        className="btn btn-danger"
                      >
                        Delete
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

export default connect(mapStateToProps, mapDispatchToProps)(AllIssuedBook);
