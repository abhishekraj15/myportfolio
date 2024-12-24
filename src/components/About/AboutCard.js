import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am{" "}
            <span className="purple">Abhishek Rajput </span>
            from <span className="purple "> India.</span>
            <br />
            <br />I am currently employed as a{" "}
            <i>
              <b className="purple">Frontend developer at Devlupers</b>
            </i>
            ,
            <br />
            responsible for designing dynamic and responsive web applications ,
            with great hands-on expertise in technologies that include{" "}
            <i>
              <b className="purple">
                Tailwind CSS, JavaScript, React.js and Next.js
              </b>
            </i>
            , building into excellent user experiences and ensuring exceptional
            front-end performance.
            <br />
            <br />
            Apart from coding, I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with Amazon Web Services.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One day I'll be developing something different!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek Rajput</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
