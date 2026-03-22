import { Container, Row, Col, Card, ListGroup, Form ,Button ,InputGroup} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/TopBar.jsx"
import sideImg from "../assets/dog-food.jpg";
import sp1 from "../assets/sp1.jpg";
import p4 from "../assets/p4.jpg";
import p6 from "../assets/p6.jpg";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Topbar />
            <CustomNavbar />
        <div className="bg-light py-2 d-flex "> 
                    <Col md={6} className="ps-5">
                        <h5 className="mb-0">REGISTER</h5>
                    </Col>

                    <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">Register</span>
                        </span>
                    </Col>
                    </div>
            <Container className="py-4">
                <Row>
                    <Col md={3}>

                        <Card className="mb-4">
                            <Card.Header className="bg-danger text-white fw-bold">HOME</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Dog Food</ListGroup.Item>
                                <ListGroup.Item>Dog House</ListGroup.Item>
                                <ListGroup.Item>Cat Food</ListGroup.Item>
                                <ListGroup.Item>Muzzles</ListGroup.Item>
                                <ListGroup.Item>Collars</ListGroup.Item>
                                <ListGroup.Item>Neck Belts</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mb-4">
                            <Card.Header className="bg-danger text-white fw-bold">BESTSELLERS</Card.Header>
                            <Card.Body>

                                <div className="d-flex mb-3">
                                    <img src={sp1} width="50" />
                                    <div className="ms-2">
                                        <div>Neck Belt</div>
                                        <small className="text-danger">$33.06</small>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <img src={p4} width="50" />
                                    <div className="ms-2">
                                        <div>Fudge</div>
                                        <small className="text-danger">$14.71</small>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <img src={p6} width="50" />
                                    <div className="ms-2">
                                        <div>Taco</div>
                                        <small className="text-danger">$22.94</small>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>


                        <img src={sideImg} className="img-fluid mt-3" />


                    </Col>

                    <Col md={9}>

                        <Card className="p-3">
<Form>

  <div className="mb-3">
    Already have an account?{" "}
    <Link to="/SignIn" className="fw-semibold" >Log in instead!</Link>
  </div>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>Social title</Form.Label>
    </Col>
    <Col md={9} className="d-flex gap-3">
      <Form.Check type="radio" label="Mr." name="title" />
      <Form.Check type="radio" label="Mrs." name="title" />
    </Col>
  </Row>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>First name</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control />
     
    </Col>
  </Row>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>Last name</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control />
      
    </Col>
  </Row>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>Email</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control type="email" />
    </Col>
  </Row>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>Password</Form.Label>
    </Col>
    <Col md={9}>
      <InputGroup>
        <Form.Control type="password" />
        <Button variant="dark">Show</Button>
      </InputGroup>
    </Col>
  </Row>

  <Row className="mb-3 align-items-center">
    <Col md={3}>
      <Form.Label>Birthdate</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control placeholder="MM/DD/YYYY" />
    </Col>
  </Row>

  <div className="mb-3">
    <Form.Check label="Receive offers from our partners" />
  </div>

  <div className="mb-3">
    <Form.Check
      label={
        <>
          Customer data privacy <br />
          <small className="text-muted">
            The personal data you provide is used to answer queries...
          </small>
        </>
      }
    />
  </div>

  <div className="mb-3">
    <Form.Check
      label={
        <>
          Sign up for our newsletter <br />
          <small className="text-muted">
            You may unsubscribe at any moment...
          </small>
        </>
      }
    />
  </div>

  <div className="mb-4">
    <Form.Check label="I agree to the terms and conditions and the privacy policy" />
  </div>

  <div className="text-end">
    <Button className="bg-danger border-danger rounded-pill px-4">

      SAVE
    </Button>
  </div>

</Form>                        </Card>

                    </Col>

                </Row>

            </Container>
            <Footer />
        </>

    );
};

export default Register;