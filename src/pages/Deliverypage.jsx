import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Topbar from "../components/TopBar.jsx"
import Dog from "../assets/dog-food.jpg";
import sp1 from "../assets/sp1.jpg";
import p4 from "../assets/p4.jpg";
import p6 from "../assets/p6.jpg";
import CustomNavbar from "../components/CustomNavbar";
import Footer from "../components/Footer";
 const Deliverypage = () => {
  return (
   <>
   <Topbar />
            <CustomNavbar />
        <div className="bg-light py-2 d-flex "> 
                    <Col md={6} className="ps-5">
                        <h5 className="mb-0">DELIVERY</h5>
                    </Col>

                    <Col md={6} className="text-md-end pe-5">
                        <span>
                            <Link to="/" className="text-dark text-decoration-none">Home</Link> »
                            <span className="text-danger ms-2">Delivery</span>
                        </span>
                    </Col>
                    </div>
<Container className="py-4">
                <Row>
                    <Col md={3}>

                        <Card className="mb-4">
                            <Card.Header className="bg-danger text-white fw-bold">HOME</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Dog Food</ListGroup.Item>
                                <ListGroup.Item>Dog House</ListGroup.Item>
                                <ListGroup.Item>Cat Food</ListGroup.Item>
                                <ListGroup.Item>Muzzles</ListGroup.Item>
                                <ListGroup.Item>Collars</ListGroup.Item>
                                <ListGroup.Item>Neck Belts</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mb-4">
                            <Card.Header className="bg-danger text-white fw-bold">BESTSELLERS</Card.Header>
                            <Card.Body>

                                <div className="d-flex mb-3">
                                    <img src={sp1} width="50" />
                                    <div className="ms-2">
                                        <div>Neck Belt</div>
                                        <small className="text-danger">$33.06</small>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <img src={p4} width="50" />
                                    <div className="ms-2">
                                        <div>Fudge</div>
                                        <small className="text-danger">$14.71</small>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <img src={p6} width="50" />
                                    <div className="ms-2">
                                        <div>Taco</div>
                                        <small className="text-danger">$22.94</small>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>


                        <img src={Dog} className="img-fluid mt-3" />


                    </Col>

                    <Col md={9}>

                        <Card className="p-3">

                        <h5 style={{fontSize:"24px",fontWeight:"400"}}>Shipments and returns</h5>
                        <span style={{fontSize:"18px"}} className="py-2"> Your pack shipment</span>

                        <p style={{fontSize:"13px"}}>Packages are generally dispatched within 2 days after receipt of payment and are shipped via UPS with tracking and drop-off without signature. If you prefer delivery by UPS Extra with required signature, an additional cost will be applied, so please contact us before choosing this method. Whichever shipment choice you make, we will provide you with a link to track your package online.</p>
                       <p style={{fontSize:"13px"}}>Shipping fees include handling and packing fees as well as postage costs. Handling fees are fixed, whereas transport fees vary according to total weight of the shipment. We advise you to group your items in one order. We cannot group two distinct orders placed separately, and shipping fees will apply to each of them. Your package will be dispatched at your own risk, but special care is taken to protect fragile objects.</p>
                        <p style={{fontSize:"13px"}}>Boxes are amply sized and your items are well-protected.</p>
                        </Card>

                    </Col>

                </Row>

            </Container>


                    <Footer />
   </>
  )
};
export default Deliverypage;