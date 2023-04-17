import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/userService";
import "./Sidebar.scss";
const Sidebar = () => {
  const logOut = () => {
    logout();
  };
  return (
    <div style={{ marginTop: "10%" }}>
      <ul className="list-func">
        <li className="list_item">
          {" "}
          <i className="fas fa-home text-white"></i>{" "}
          <Link to="/dashboard/"> Home </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-address-book text-white"></i>
          <Link to="/dashboard/allBook"> All Books </Link>{" "}
        </li>
        <hr />

        <li className="list_item">
          {" "}
          <i className="fas fa-book text-white"></i>
          <Link to="/dashboard/addBook"> Add Book </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-users text-white"></i>
          <Link to="/dashboard/manageStudent"> Manage Students </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-registered text-white"></i>
          <Link to="/dashboard/stuReqIssue"> Issue Request </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-book text-white"></i>{" "}
          <Link to="/dashboard/allissuedBook"> All Issued Book </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-book text-white"></i>{" "}
          <Link to="/dashboard/issue_return"> Today Issue Book </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-book text-white"></i>{" "}
          <Link to="/dashboard/returnBook"> Today Return Book </Link>{" "}
        </li>
        <hr />
        <li className="list_item">
          {" "}
          <i className="fas fa-book text-white"></i>{" "}
          <Link to="/dashboard/issuedBook"> Curently issued Book</Link>{" "}
        </li>
        <hr />

        <li className="list_item" onClick={() => logOut()}>
          {" "}
          <i className="fas fa-power-off text-white"></i>
          <span
            style={{
              fontSize: "20px",
              color: "#fff",
              marginLeft: "2px",
              fontFamily: "Oswald",
            }}
          >
            {" "}
            Logout{" "}
          </span>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
