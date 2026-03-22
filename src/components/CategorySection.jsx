import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlane, FaWallet, FaHeadphones } from "react-icons/fa";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

const CategorySection = () => {
  return (
    <>
      <div className="features">
        <Container>
          <Row className="text-center align-items-center">
            
            <Col md={4} className="feature-item">
              <FaPlane className="feature-icon" />
              <h6>Free Shipping Worldwide</h6>
              <p>On order over $150</p>
            </Col>

            <Col md={4} className="feature-item border-start border-end">
              <FaWallet className="feature-icon" />
              <h6>Cash On Delivery</h6>
              <p>100% money back guarantee</p>
            </Col>

            <Col md={4} className="feature-item">
              <FaHeadphones className="feature-icon" />
              <h6>24/7 Customer Service</h6>
              <p>Call us 24/7 at 123 - 456 - 789</p>
            </Col>

          </Row>
        </Container>
      </div>

      <Container className="category-section">
        <Row>

          <Col md={6}>
            <div
              className="category-card"
              style={{
                backgroundImage: `url(${banner3})`,
              }}
            >
              <div className="category-content">
                <h4>Cat Food Collection</h4>
                <p>Save Up to 40% Off</p>
                <Button variant="outline-dark">SHOP NOW</Button>
              </div>
            </div>
          </Col>
          
          <Col md={6}>
            <div
              className="category-card"
              style={{
                backgroundImage: `url(${banner4})`,
              }}
            >
              <div className="category-content">
                <h4>Dog Food Collection</h4>
                <p>Save Up to 40% Off</p>
                <Button variant="outline-dark">SHOP NOW</Button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default CategorySection;