import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Topbar from "../components/TopBar";
import CustomNavbar from "../components/CustomNavbar"
import Footer from "../components/Footer";
import banner from "../assets/banner.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p9 from "../assets/p9.jpg";
import dog from "../assets/dog-food.jpg"

const initialProducts = [
  { id: 1, name: "Fudge", price: 14.71, img: p4 },
  { id: 2, name: "Leather Muzzle", price: 12.85, img: p3 },
  { id: 3, name: "Brown Bear", price: 37.80, img: p9 },
  { id: 4, name: "Leather Belt", price: 114.42, img: p4 },
  { id: 5, name: "Muzzle Toy", price: 27.84, img: p2 },
];



const Muzzle = () => {

  const [sortType, setSortType] = useState("asc");

  const sortedProducts = [...initialProducts].sort((a, b) =>
    sortType === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <>
      <Topbar />
      <CustomNavbar />
      <div className="bg-light py-2 d-flex ">
        <Col md={6} className="ps-5">
          <h5 className="mb-0">MUZZLES</h5>
        </Col>
        <Col md={6} className="text-md-end pe-5">
          <Link to="/" className="text-dark text-decoration-none">Home</Link> »
          <span className="ms-2 text-danger">
            Muzzle
          </span>
        </Col>

      </div>

      <Container className="py-4">

        <Row>

          <Col md={3}>
            <Card className="mb-4">
              <Card.Header className="bg-danger text-white fw-bold">MUZZLES</Card.Header>
            </Card>

            <Card className="mb-4">
              <Card.Header className="bg-danger text-white fw-bold">BESTSELLERS</Card.Header>
              <Card.Body>
                {initialProducts.slice(0, 3).map((item) => (
                  <div className="d-flex mb-3" key={item.id}>
                    <img src={item.img} width="50" />
                    <div className="ms-2">
                      <div>{item.name}</div>
                      <small className="text-danger">${item.price}</small>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
            <img src={dog} className="img-fluid mt-3" />
          </Col>

          <Col md={9}>

            <Card className="p-3 mb-4">
              <img src={banner} className="img-fluid" />
              <p className="text-muted small mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Card>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <span>There are 5 products.</span>

              <Form.Select
                style={{ width: "200px" }}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
              </Form.Select>
            </div>

            <Row>
              {sortedProducts.map((item) => (
                <Col md={4} key={item.id} className="mb-4">
                  <Card className="text-center p-3">
                    <img src={item.img} className="img-fluid mb-2" />
                    <h6>{item.name}</h6>
                    <p className="text-danger">${item.price}</p>
                  </Card>
                </Col>
              ))}
            </Row>

          </Col>

        </Row>

      </Container>
      <Footer />
    </>
  )
}

export default Muzzle;