import { Container, Row, Col } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import sp1 from "../assets/sp1.jpg";
import sp2 from "../assets/sp2.jpg";
import p4 from "../assets/p4.jpg";
import banner from "../assets/Specialimage.jpg";

const products = [
  { id: 1, name: "Bell Belt", price: "$98.00", old: "$122.00", img: p1, tag: "-20%" },
  { id: 2, name: "Fudge", price: "$1,750.00", old: "$2,000.00", img: sp1, tag: "-13%" },
  { id: 3, name: "Dog Belt", price: "$1,082.00", old: "$1,202.00", img: sp2, tag: "-10%" },
  { id: 4, name: "Lather Muzzle", price: "$122.00", old: "$241.00", img: p4, tag: "-50%" },
];

const SpecialProducts = () => {
  return (
    <Container className="special-products">
      <Row>

        <Col md={7}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4>Special Products</h4>

            <div className="arrows">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
          </div>

          <Row>
            {products.map((item) => (
              <Col md={6} key={item.id}>
                <div className="product-card">

                  <span className="discount-tag">{item.tag}</span>

                  <div className="product-img">
                    <img src={item.img} alt={item.name} />
                  </div>

                  <div className="product-info text-center">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <h6>{item.name}</h6>

                    <p>
                      {item.price} <span className="old">{item.old}</span>
                    </p>
                  </div>

                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col md={5}>
          <div className="special-banner">
            <div className="banner-content">
              <h3>Pet Food & Accessories</h3>
              <p>From $30.00 To $125.00</p>
              <button className="banner-btn">SHOP NOW</button>
            </div>
            <img src={banner} alt="promo" className="banner-img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecialProducts;