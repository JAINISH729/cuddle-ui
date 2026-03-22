import { Container, Row, Col, Button } from "react-bootstrap";
import banner from "../assets/promoimage.jpg"; 

const PromoSection = () => {
  return (
    <div
      className="promo-section"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="promo-content">
              <h1>Big Sale Pets All Product</h1>
              <h4>30% Off in Food For Puppies</h4>
              <Button className="promo-btn">SHOP NOW</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoSection;