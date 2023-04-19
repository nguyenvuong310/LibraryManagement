import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { getAllBook, delBook } from "../../../services/userService";

class allBookStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }
  async componentDidMount() {
    await this.getAllBookService();
  }
  getAllBookService = async () => {
    try {
      let res = await getAllBook();
      console.log(res);
      let bookAvailable = [];
      let count = 0;
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].copies !== 0) {
          bookAvailable[count] = res.data[i];
          count = count + 1;
        }
      }
      this.setState({
        books: bookAvailable,
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleIssuseBook = async (data) => {
    console.log(this.props.userInfo);
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        <div className="col-md-8 m-auto">
          <h3
            className="text-center bg-info p-2"
            style={{ fontFamily: "sans-serif" }}
          >
            All AVAILABLE BOOk IN LIBARY
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
                <th>Serial No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Copies</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book, index) => {
                  return (
                    <tr key={book._id}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.copies}</td>
                      <td>{book.copies > 0 ? "AVAILABLE" : "NOT AVAILABLE"}</td>
                      <td>
                        <button
                          className="btn-del"
                          onClick={() => this.handleIssueBook(book)}
                          title="Borrow"
                        >
                          <i className="fas fa-plus"></i>
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
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(allBookStudent);
