import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Development is my passion, and I’m always learning, even if just a
              little. 💬
              <br />
              <br />I am a passionate{" "}
              <i>
                <b className="purple"> Frontend Developer{"  "}</b>
              </i>
              fluent in JavaScript, with strong experience in
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>{" "}
              I specialize in creating innovative web technologies and products,
              focusing on Frontend Development. I use React.js and Next.js to
              build dynamic, high-performance interfaces.<br></br>
              <br></br>
              Currently, I’m
              <i>
                <b className="purple">
                  {" "}
                  expanding my skills in AWS, including IAM, EC2, S3, ELB, ASG,
                  and DynamoDB,{" "}
                </b>
              </i>
              as I continue to explore cloud technologies and their applications
              in web development.
              <br></br>
              <br></br>I am always{" "}
              <i className="purple">
                <b>eager to explore new technologies</b>
              </i>{" "}
              and tackle challenges, combining my passion for development with a
              forward-thinking approach to deliver high-quality web solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abhishekraj15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/BroCode1508"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abhishek-rajput-127887186/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
