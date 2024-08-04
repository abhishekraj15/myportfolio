import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Rajput </span>
            from <span className="purple"> Bijnor, India.</span>
            <br />
            I am currently employed as a Frontend developer at devlupers.
            <br />
            I have completed B.tech in Computer Science and Engineering from Dr.
            A. P. J. Abdul Kalam Technical University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Tech Docs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "One day developed something different!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
