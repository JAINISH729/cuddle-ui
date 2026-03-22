import { Container, Row, Col } from "react-bootstrap";

// 👉 replace with your images
import b1 from "../assets/blog1.jpg";
import b2 from "../assets/blog2.jpg";
import b3 from "../assets/blog3.jpg";

const blogs = [
  {
    id: 1,
    title: "Consectetur Adipiscing",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: b1,
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolo",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: b2,
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    img: b3,
  },
];

const BlogSection = () => {
  return (
    <Container className="blog-section">
      <h2 className="text-center mb-4">Latest Blogs</h2>

      <Row>
        {blogs.map((item) => (
          <Col md={4} key={item.id}>
            <div className="blog-card">

              <div className="blog-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="blog-content">
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
                <button className="read-btn">READ MORE</button>
              </div>

            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogSection;