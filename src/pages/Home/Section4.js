import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <div id="shop">
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Our burger shop is a haven for burger lovers, dedicated to
                serving mouthwatering creations made from the freshest
                ingredients. With a menu that blends classic favorites and
                innovative recipes, every burger is crafted to perfection. Our
                cozy, inviting atmosphere makes it the perfect spot to enjoy a
                delicious meal, whether you’re dining in or taking out.
                Exceptional service and a passion for quality are at the heart
                of everything we do, ensuring that every visit leaves you
                satisfied and craving more.
              </p>
              <ul>
                <li>
                  <p>
                    Fresh Ingredients: We use only the freshest, high-quality
                    ingredients in every burger.
                  </p>
                </li>
                <li>
                  <p>
                    Unique Creations: Our menu features a mix of classic and
                    innovative burgers.
                  </p>
                </li>
                <li>
                  <p>
                    Cozy Atmosphere: Enjoy your meal in a warm, inviting
                    setting.
                  </p>
                </li>
                <li>
                  <p>
                    Exceptional Service: We’re dedicated to providing friendly
                    and fast service.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </div>
  );
}

export default Section4;
