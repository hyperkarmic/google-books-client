import React, { useContext } from "react";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import UserContext from "../context/UserContext";

const ProtectedRoutes = () => {
  const { setUser } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/home">
        <Navbar.Brand>Covid-Tracker</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/my-books">
          <Nav.Link>My Books</Nav.Link>
        </LinkContainer>
        <Nav.Link
          onClick={() => {
            localStorage.removeItem("bibliography");
            setUser({});
          }}
        >
          Logout
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default ProtectedRoutes;
