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


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Topbar />
            <CustomNavbar />
        <div className="bg-light py-2 d-flex "> 
                    <Col md={6} className="ps-5">
                        <h5 className="mb-0">SIGN IN</h5>
                    </Col>

                    <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">SignIn</span>
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

  <Row className="mb-4 align-items-center">
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

  <div className="text-center mb-3">
    <span className="text-dark">Forgot your password?</span>
  </div>

  <div className="text-center mb-4">
    <Button className="bg-danger border-danger rounded-pill px-4">
      SIGN IN
    </Button>
  </div>

  <hr />

  <div className="text-center">
    No account?{" "}
    <Link to="/Register" className="fw-semibold" >Create one here</Link>
  </div>

</Form>
                           
                        </Card>

                    </Col>

                </Row>

            </Container>
            <Footer />
        </>

    );
};

export default SignIn;