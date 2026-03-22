import { Navbar, Nav, Container, NavDropdown, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import logo from "../assets/logo.png";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Nav className="mx-auto nav-links">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
            <NavDropdown title="Dog House">
              <NavDropdown.Item>Fancy House</NavDropdown.Item>
              <NavDropdown.Item>Indoor House</NavDropdown.Item>
              <NavDropdown.Item>Outdoor House</NavDropdown.Item>
              <NavDropdown.Item>Wooden House</NavDropdown.Item>
              <NavDropdown.Item>Cat House</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Cat Food">
              <NavDropdown.Item>Brandy</NavDropdown.Item>
              <NavDropdown.Item>Brie</NavDropdown.Item>
              <NavDropdown.Item>Brown Bear Cushion</NavDropdown.Item>
              <NavDropdown.Item>Cappuccino</NavDropdown.Item>
              <NavDropdown.Item>Chiquita</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/muzzle">Muzzles</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/ContactUs">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/Delivery">Delivery</Nav.Link>

          </Nav>

          <div className="d-flex align-items-center gap-3 nav-icons">
            <FaSearch />
            <Dropdown align="end">
  <Dropdown.Toggle
    variant="link"
    className="p-0 border-0 text-dark"
  >
    <FaUser />
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item as={Link} to={"/SignIn"}>Sign in</Dropdown.Item>
    <Dropdown.Item as={Link} to={"/Register"}>Register</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            <FaShoppingBag />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;