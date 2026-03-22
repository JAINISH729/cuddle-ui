import { Carousel } from "react-bootstrap";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";

const Hero = () => {
  return (
    <Carousel
      fade
      controls
      indicators={false}
      interval={3000}
      className="hero-carousel"
    >
      <Carousel.Item>
        <img
          src={banner1}
          className="d-block w-100 hero-img"
          alt="banner1"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={banner2}
          className="d-block w-100 hero-img"
          alt="banner2"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;