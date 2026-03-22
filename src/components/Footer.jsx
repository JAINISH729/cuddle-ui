import { Container, Row, Col } from "react-bootstrap";
import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn }
 from "react-icons/fa";
 
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          
          <Col md={3}>
            <h5>CONTACT INFO</h5>
            <p>Address: 71 Pennington Lane Vernon Rockville, CT 06066.</p>
            <p>Phone: 0123-456-789</p>
            <p>E-mail: Theme@Demo.Com</p>

          </Col>

          <Col md={3}>
            <h5>INFORMATION</h5>
            <ul>
              <li>Delivery</li>
              <li>Legal Notice</li>
              <li >About Us</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>MY ACCOUNT</h5>
            <ul>
              <li>Personal Info</li>
              <li>Orders</li>
              <li>Credit Slips</li>
              <li>Addresses</li>
              <li>Vouchers</li>
              <li>My Wishlists</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>INSTAGRAM POST</h5>
            <div className="insta-grid">
              <img src={i1} alt="" />
              <img src={i2} alt="" />
              <img src={i3} alt="" />
              <img src={i4} alt="" />
              <img src={i5} alt="" />
              <img src={i6} alt="" />
            </div>
          </Col>

        </Row>

        <div className="footer-bottom">
          <p>© 2026 - Ecommerce software by PrestaShop™</p>

          <div className="d-flex gap-4">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;