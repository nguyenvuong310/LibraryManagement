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
      book: [],
      isDel: false,
      isEdit: false,
      reset: false,
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
  reset = () => {
    this.setState({
      reset: true,
    });
    this.getAllBookService();
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
  warning = () => {
    alert(
      "Day la du lieu hien thi mau khong thao tac duoc!! Vui long Add book de thao tac"
    );
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        {this.state.isOpenModalEditBook && (
          <ModalEditBook
            isOpen={this.state.isOpenModalEditBook}
            toggleFromParent={this.toggleUserModal}
            putBook={this.handleEditBook}
            currentBook={this.state.book}
            reset={this.reset}
          />
        )}
        <div className="col-md-8 m-auto">
          <h3
            className="text-center bg-info p-2"
            style={{ fontFamily: "sans-serif" }}
          >
            All BOOK IN LIBRARY
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
              <tr>
                <td>0</td>
                <td>Advanced programing</td>
                <td>Le Dinh Thuan</td>
                <td>1</td>
                <td>AVAILABLE</td>
                <td>
                  <button className="btn-edit" onClick={() => this.warning()}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="btn-del" onClick={() => this.warning()}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
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
