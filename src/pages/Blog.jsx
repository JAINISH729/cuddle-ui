import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Topbar from "../components/TopBar";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";

import b1 from "../assets/blog1.jpg";
import b2 from "../assets/blog2.jpg";
import b3 from "../assets/blog3.jpg";
import b4 from "../assets/blog4.jpg";
import b5 from "../assets/blog5.jpg";

const blogs = [
  { id: 1, title: "Consectetur Adipiscing", img: b1 },
  { id: 2, title: "Lorem Ipsum Dolo", img: b2 },
  { id: 3, title: "Lorem Ipsum Dolor", img: b3 },
  { id: 4, title: "Lorem Ipsum Dolor Sit Amet", img: b4 },
  { id: 5, title: "The Standard Lorem Ipsum", img: b5 },
];

const BlogContent = () => {
  return (

    <>
    <Topbar />
    <CustomNavbar />
     <div className="bg-light py-2 d-flex "> 
                    <Col md={6} className="ps-5">
                        <h5 className="mb-0 ps-5">BLOG</h5>
                    </Col>

                    <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">Blog</span>
                        </span>
                    </Col>
                    </div>
        <Container className="py-4">

      <Row>
        <Col md={9}>
          <Row>
            {blogs.map((item) => (
              <Col md={6} className="mb-4" key={item.id}>
                <Card className="p-2">

                  <img src={item.img} className="img-fluid" />

                  <Card.Body>
                    <h6>{item.title}</h6>

                    <p className="text-muted small">
                      Lorem ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <button className="btn btn-outline-secondary rounded-pill btn-sm">
                      READ MORE
                    </button>
                  </Card.Body>

                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={3}>

          <Card className="mb-4">
            <Card.Header className="bg-danger text-white fw-bold">BLOG ARCHIVE</Card.Header>
            <Card.Body>
              <p className="mb-1">2021</p>
              <p className="text-muted small">January</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-danger text-white fw-bold">CATEGORY</Card.Header>
            <Card.Body>
              <Form.Select>
                <option>Select Category</option>
              </Form.Select>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-danger text-white fw-bold">LATEST COMMENTS</Card.Header>
            <Card.Body>
              <p className="small">Admin on Lorem ipsum</p>
              <p className="small">Admin on Another post</p>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-danger text-white fw-bold">POPULAR ARTICLES</Card.Header>
            <Card.Body>
              <div className="d-flex mb-2">
                <img src={b1} width="50" />
                <div className="ms-2 small">Lorem Ipsum Dolor</div>
              </div>
              <div className="d-flex">
                <img src={b2} width="50" />
                <div className="ms-2 small">The Standard Lorem Ipsum</div>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Header className="bg-danger text-white fw-bold">RECENT ARTICLES</Card.Header>
            <Card.Body>
              <div className="d-flex mb-2">
                <img src={b3} width="50" />
                <div className="ms-2 small">Consectetur Adipiscing</div>
              </div>
              <div className="d-flex">
                <img src={b4} width="50" />
                <div className="ms-2 small">Lorem Ipsum Dolor</div>
              </div>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header className="bg-danger text-white fw-bold">BLOG SEARCH</Card.Header>
            <Card.Body>
              <Form.Control placeholder="Search" />
            </Card.Body>
          </Card>

        </Col>

      </Row>

    </Container>
    <Footer />
  </>

  );
};

export default BlogContent;