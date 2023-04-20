import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { studentLogin } from "../../../services/userService";
import { toast } from "react-toastify";
import _ from "lodash";
class ModalEditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      publisher: "",
      year: "",
      copies: "",
    };
  }
  componentDidMount() {
    let book = this.props.currentBook;
    console.log("book from parent", book);
    if (book && !_.isEmpty(book)) {
      this.setState({
        author: book.author,
        title: book.title,
        year: book.year,
        publisher: book.publisher,
        copies: book.copies,
      });
    }
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
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
  handleEditBook = async () => {
    let isValid = this.checkValidInput();
    if (isValid === true) {
      let data = {
        author: this.state.author,
        title: this.state.title,
        year: this.state.year,
        publisher: this.state.publisher,
        copies: this.state.copies,
      };
      console.log(data);
      this.toggle();
      toast.success("Edit Book Succeed!");
    }
  };
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>EDIT INFOR BOOK</ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container max-width-input">
              <label>Title</label>
              <input
                type="txt"
                onChange={(event) => this.handleOnChangeInput(event, "title")}
                value={this.state.title}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Author</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "author")}
                value={this.state.author}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Publisher</label>
              <input
                type="text"
                onChange={(event) =>
                  this.handleOnChangeInput(event, "pushlisher")
                }
                value={this.state.publisher}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Year</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "year")}
                value={this.state.year}
              ></input>
            </div>
            <div className="input-container max-width-input">
              <label>Copies</label>
              <input
                type="text"
                onChange={(event) => this.handleOnChangeInput(event, "copies")}
                value={this.state.copies}
              ></input>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            className="px-3 btn-create"
            onClick={() => this.handleEditBook()}
          >
            Save
          </Button>{" "}
          <Button
            color="secondary"
            className="px-3"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditBook);
