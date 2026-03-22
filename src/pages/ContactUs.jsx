import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Topbar from "../components/TopBar";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";


const ContactUs = () => {

    return(
<>
<Topbar />
<CustomNavbar />

<div className="bg-light py-2 d-flex ">
    <Col md={6} className="ps-5">
                        <h5 className="mb-0">CONTACT US</h5>
                    </Col>
                     <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">ContactUs</span>
                        </span>
                    </Col>
</div>

<Container className="py-4">
  <Row>

    <Col md={3}>
      <Card>
        <Card.Header className="fw-semibold border-start border-3 border-danger">
          Store Information
        </Card.Header>

        <Card.Body>

          <div className="d-flex align-items-start mb-3">
            <FaMapMarkerAlt className="me-2 mt-1" />
            <div>
              cuddle <br />
              United Kingdom
            </div>
          </div>

          <hr />

          <div className="d-flex align-items-start">
            <FaEnvelope className="me-2 mt-1" />
            <div>
              Email us: <br />
              demo@yourstore.com
            </div>
          </div>

        </Card.Body>
      </Card>
    </Col>

    <Col md={9}>
      <Card className="p-4">

        <h5 className="mb-4">Contact us</h5>

        <Form>

          <Row className="mb-3 align-items-center">
            <Col md={3}>
              <Form.Label>Subject</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Select>
                <option>Customer service</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col md={3}>
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control placeholder="your@email.com" />
            </Col>
          </Row>

          <Row className="mb-3 align-items-center">
            <Col md={3}>
              <Form.Label>Attachment</Form.Label>
            </Col>
            <Col md={9} className="d-flex gap-2">
              <Form.Control type="file" />
              
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={3}>
              <Form.Label>Message</Form.Label>
            </Col>
            <Col md={9}>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="How can we help?"
              />
            </Col>
          </Row>

          <div className="text-end">
            <Button className="bg-danger border-danger rounded-pill px-4">
              SEND
            </Button>
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

export default ContactUs;