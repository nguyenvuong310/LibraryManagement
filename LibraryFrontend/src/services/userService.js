import axios from "axios";

const getAllBook = () => {
  return axios.get(`http://localhost:8080/books`);
};
const getAllStudent = () => {
  return axios.get(`http://localhost:8080/student/getAll`);
};
const addOneBook = (book) => {
  return axios.post("http://localhost:8080/addbook", book);
};
const logout = () => {
  window.location.href = "/";
};
const createNewStudent = (student) => {
  return axios.post("http://localhost:8080/student/add", student);
};
const studentLogin = (username) => {
  return axios.get(
    `http://localhost:8080/student/username?username=${username}`
  );
};
const delBook = (bookId) => {
  return axios.delete(`http://localhost:8080/del-books/${bookId}`);
};
const delStu = (stuId) => {
  return axios.delete(`http://localhost:8080/student/del-student/${stuId}`);
};
const RequestIssue = (data) => {
  return axios.post("http://localhost:8080/request", data);
};
const getAllRequestIssue = () => {
  return axios.get(`http://localhost:8080/issue`);
};
const delRequestIssue = (id) => {
  return axios.delete(`http://localhost:8080/del-issue/${id}`);
};
const saveBookIssue = (data) => {
  return axios.post("http://localhost:8080/accept-issue", data);
};
const getAllIssuedBook = () => {
  return axios.get(`http://localhost:8080/all-issued`);
};
const getAllBookByStudent = (studentid) => {
  return axios.get(`http://localhost:8080/issue-mssv?mssv=${studentid}`);
};
const editBook = (bookId, book) => {
  return axios.put(`http://localhost:8080/put-book/${bookId}`, book);
};
const delIssuedBooks = (dataId, data) => {
  return axios.delete(`http://localhost:8080/del-issued/${dataId}`);
};
const decreaseNumBook = (bookId, book) => {
  return axios.put(`http://localhost:8080/decrease-book/${bookId}`, book);
};
const findBook = (title) => {
  return axios.get(`http://localhost:8080/find-book?title=${title}`);
};
export {
  getAllBook,
  addOneBook,
  logout,
  createNewStudent,
  getAllStudent,
  studentLogin,
  delBook,
  delStu,
  RequestIssue,
  getAllRequestIssue,
  delRequestIssue,
  saveBookIssue,
  getAllIssuedBook,
  getAllBookByStudent,
  editBook,
  delIssuedBooks,
  decreaseNumBook,
  findBook,
};
