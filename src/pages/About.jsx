import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Topbar from "../components/TopBar.jsx"
import banner from "../assets/about-banner.jpg";
import sideImg from "../assets/dog-food.jpg";
import sp1 from "../assets/sp1.jpg";
import p4 from "../assets/p4.jpg";
import p6 from "../assets/p6.jpg";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";

const AboutContent = () => {
    return (
        <>
            <Topbar />
            <CustomNavbar />
        <div className="bg-light py-2 d-flex "> 
                    <Col md={6} className="ps-5">
                        <h5 className="mb-0">ABOUT US</h5>
                    </Col>

                    <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">About us</span>
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

                            <img
                                src={banner}
                                className="w-100 mb-4"
                                style={{ height: "650px", objectFit: "conatin" }}
                            />

                            <Row>

                                <Col md={4}>
                                    <h5>Our company</h5>
                                    <p className="text-muted small">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                    </p>
                                    <p className="text-muted small">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.
                                    </p>

                                    <ul className="small ps-3">
                                        <li>Top quality products</li>
                                        <li>Best customer service</li>
                                        <li>30-days money back guarantee</li>
                                    </ul>
                                </Col>

                                <Col md={4}>
                                    <h5>Our team</h5>
                                    <p className="text-muted small">
                                        Lorem set sint occaecat cupidatat non.
                                    </p>
                                    <p className="text-muted small">
                                        Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Col>

                                <Col md={4}>
                                    <h5>Testimonials</h5>
                                    <p className="text-muted small">
                                        "Lorem ipsum dolor sit amet consectetur adipiscing elit incididunt ut labore et dolore magna aliqua."
                                    </p>
                                    <p className="text-muted small">
                                        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
                                    </p>
                                </Col>

                            </Row>

                        </Card>

                    </Col>

                </Row>

            </Container>
            <Footer />
        </>

    );
};

export default AboutContent;