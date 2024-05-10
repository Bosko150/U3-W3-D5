import { Navbar, Nav, Form, FormControl, Button, Col } from "react-bootstrap";
import { BsFillBookFill, BsFillHouseDoorFill } from "react-icons/bs";
import icon from "../assets/logo/logo.png";
import { getSearchInput } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
const MySidebar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchInput(search));
  };
  return (
    <Col xs={2}>
      <Navbar expand="md" fixed="left" className="justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Navbar.Brand>
            <img src={icon} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="flex-column">
              <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                <BsFillHouseDoorFill />
                &nbsp; Home
              </Nav.Link>

              <Nav.Link href="#" className="nav-item nav-link d-flex align-items-center">
                <BsFillBookFill />
                &nbsp; Your Library
              </Nav.Link>

              <Form onSubmit={handleSubmit} className="mt-3 d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  onChange={handleSearch}
                  className="mr-sm-2 rounded-0 rounded-start"
                />
                <Button type="submit" variant="outline-secondary" size="sm" className="rounded-0 rounded-end">
                  GO
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Navbar>
    </Col>
  );
};

export default MySidebar;
