import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Experience the original burger taste like never before. Our classic recipes feature fresh, high-quality ingredients and a perfect blend of flavors, staying true to the essence of a truly great burger. Authenticity and deliciousness in every bite.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `At our shop, quality is our top priority. We carefully select the finest ingredients and prepare each dish with precision to ensure exceptional taste and freshness. Every bite reflects our commitment to delivering only the best food for our customers.`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Experience the fastest delivery with our efficient service—hot, fresh, and right to your door in record time. Enjoy your favorite meals quickly and conveniently, without compromising on quality or flavor.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <div id="about">
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                We offer handcrafted burgers made from the freshest ingredients,
                grilled to perfection. Each burger is a masterpiece, combining
                unique flavors and textures that satisfy every craving. From
                classic favorites to bold creations, our menu has something
                delicious for everyone to enjoy.
              </p>
              <a href="#menu" className="btn order_now btn_red">
                Explore Full Menu
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Section2;
