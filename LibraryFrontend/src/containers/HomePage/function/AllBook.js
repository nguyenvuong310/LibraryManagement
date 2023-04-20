import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { getAllBook, delBook, editBook } from "../../../services/userService";
import { toast } from "react-toastify";
import ModalEditBook from "./ModalEditBook";
import "./function.scss";
class allBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isOpenModalEditBook: false,
      book: "",
    };
  }
  async componentDidMount() {
    await this.getAllBookService();
  }
  getAllBookService = async () => {
    try {
      let res = await getAllBook();
      console.log(res);
      this.setState({
        books: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  toggleUserModal = () => {
    this.setState({
      isOpenModalEditBook: !this.state.isOpenModalEditBook,
    });
  };
  handleDelBook = async (data) => {
    await delBook(data.id);
    await this.getAllBookService();
    toast.success("Delete Book Succeed!");
  };
  handleEditBook = (data) => {
    console.log("check buuton ", data);
    this.setState({
      isOpenModalEditBook: true,
      book: data,
    });
    console.log("check buuton ", this.state.book);
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        <ModalEditBook
          isOpen={this.state.isOpenModalEditBook}
          toggleFromParent={this.toggleUserModal}
          putBook={this.handleEditBook}
          currentBook={this.state.book}
        />
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
                          className="btn-edit"
                          onClick={() => this.handleEditBook(book)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          className="btn-del"
                          onClick={() => this.handleDelBook(book)}
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

export default connect(mapStateToProps, mapDispatchToProps)(allBook);
