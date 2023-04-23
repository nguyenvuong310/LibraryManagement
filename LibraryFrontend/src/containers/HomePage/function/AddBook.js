import React, { Component } from "react";
import { connect } from "react-redux";
// import { push } from "connected-react-router";
import { addOneBook } from "../../../services/userService";
import { toast } from "react-toastify";
import "./function.scss";
class addBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      author: "",
      publisher: "",
      year: "",
      copies: "",
    };
  }
  handleOnChangeInput = (event, type) => {
    let copyState = { ...this.state };
    copyState[type] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidInput = () => {
    let isValid = true;
    let arrInput = ["title", "author", "publisher", "year", "copies"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("missing parameter " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };
  saveBook = async () => {
    let isValid = this.checkValidInput();
    if (isValid) {
      let data = {
        author: this.state.author,
        title: this.state.title,
        year: this.state.year,
        publisher: this.state.publisher,
        copies: this.state.copies,
      };
      console.log(data);
      await addOneBook(data);
      toast.success("Add Book Succeed!");
      this.setState({
        id: "",
        title: "",
        author: "",
        publisher: "",
        year: "",
        copies: "",
      });
    }
  };
  render() {
    const { title, author, year, publisher, copies } = this.state;
    return (
      <div className=" mt-5">
        <div className="card col-md-6 m-auto p-3">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Add a New Book
          </h2>
          <div className="mb-3 addbook-input">
            <input
              type="text"
              placeholder="Book title"
              style={{ height: "60px" }}
              onChange={(event) => this.handleOnChangeInput(event, "title")}
              value={title}
              className="form-control"
            />
          </div>
          <div className="mb-2 addbook-input">
            <input
              type="text"
              placeholder="Author name"
              value={author}
              onChange={(event) => this.handleOnChangeInput(event, "author")}
              style={{ height: "60px" }}
              className="form-control"
            />
          </div>
          <div className="mb-2 addbook-input">
            <input
              type="text"
              placeholder="Publisher"
              value={publisher}
              onChange={(event) => this.handleOnChangeInput(event, "publisher")}
              style={{ height: "60px" }}
              className="form-control"
            />
          </div>
          <div className="mb-2 addbook-input">
            <input
              type="text"
              placeholder="Publishing Year"
              value={year}
              onChange={(event) => this.handleOnChangeInput(event, "year")}
              style={{ height: "60px" }}
              className="form-control"
            />
          </div>
          <div className="mb-2 addbook-input">
            <input
              type="text"
              placeholder=" Number of Copies"
              style={{ height: "60px" }}
              value={copies}
              onChange={(event) => this.handleOnChangeInput(event, "copies")}
              className="form-control"
            />
          </div>

          <button
            className="btn btn-primary btn-add"
            onClick={() => this.saveBook()}
          >
            Add Book
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(addBook);
