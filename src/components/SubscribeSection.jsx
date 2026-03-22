import { Container } from "react-bootstrap";

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <Container className="text-center">
        <h2>Subscribe Newsletter</h2>
        <p>
          Subscribe to our newsletters now and stay up to date with new collections
          and exclusive offers.
        </p>

        <div className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </Container>
    </div>
  );
};

export default SubscribeSection;