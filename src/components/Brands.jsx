import { Container } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// 👉 use your logo images (SVG/PNG)
import b1 from "../assets/brand1.jpg";
import b2 from "../assets/brand2.jpg";
import b3 from "../assets/brand3.jpg";
import b4 from "../assets/brand4.jpg";
import b5 from "../assets/brand5.jpg";
import b6 from "../assets/brand6.jpg";

const brands = [b1, b2, b3, b4, b5, b6];

const Brands = () => {
  return (
    <div className="brand-section">
      <Container>
        <div className="brand-wrapper">

          <div className="brand-logos">
            {brands.map((logo, index) => (
              <div className="brand-item" key={index}>
                <img src={logo} alt="brand" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Brands;