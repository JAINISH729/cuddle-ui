import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { FaEye, FaHeart, FaExchangeAlt, FaStar } from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";


const productsData = [
  { id: 1, name: "Taco", price: "$122.00", img: p1 },
  { id: 2, name: "Muzzle", price: "$123.20", img: p2 },
  { id: 3, name: "Brown Bear", price: "$122.00", img: p3 },
  { id: 4, name: "Dog Food", price: "$98.00", img: p4 },
  { id: 5, name: "Fudge", price: "$1750.00", img: p5 },
  { id: 6, name: "Dog Belt", price: "$1082.00", img: p8 },
  { id: 7, name: "Neck Belt ", price: "$110.00", img: p6 },
  { id: 8, name: "Harness", price: "$122.00", img: p7 },
];

const TopProducts = () => {
  const [active, setActive] = useState("featured");

  return (
    <Container className="top-products">
      <h2 className="text-center mb-3">Top Products</h2>

      <div className="tabs text-center mb-4">
        <Button
          className={active === "featured" ? "tab active" : "tab"}
          onClick={() => setActive("featured")}
        >
          Featured
        </Button>

        <Button
          className={active === "latest" ? "tab" : "tab"}
          onClick={() => setActive("latest")}
        >
          Latest
        </Button>

        <Button
          className={active === "bestseller" ? "tab" : "tab"}
          onClick={() => setActive("bestseller")}
        >
          Bestseller
        </Button>
      </div>

      <Row>
        {productsData.map((item) => (
          <Col md={3} key={item.id}>
            <div className="product-card">

              <div className="product-img">
                <img src={item.img} alt={item.name} />

                <div className="product-actions">
                  <FaExchangeAlt />
                  <FaEye />
                  <FaHeart />
                </div>
              </div>

              <div className="product-info text-center">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <h6>{item.name}</h6>
                <p>{item.price}</p>

                <button className="add-cart">Add to Cart</button>
              </div>

            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TopProducts;