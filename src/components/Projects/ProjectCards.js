import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper function to truncate text
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const handleReadMoreToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <span style={{ display: "inline" }}>
            {isExpanded
              ? props.description
              : truncateText(props.description, 18)}
          </span>
          {props.description.split(" ").length > 18 && (
            <Button
              variant="link"
              style={{
                padding: 0,
                textDecoration: "none",
                display: "inline",
                marginLeft: "5px",
              }}
              onClick={handleReadMoreToggle}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </Button>
          )}
        </Card.Text>
        <Button
          variant="primary"
          href={props.ghLink || "#"}
          target="_blank"
          disabled={!props.ghLink} // Disable if ghLink is false
          style={{
            cursor: props.ghLink ? "pointer" : "not-allowed", // Show appropriate cursor
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
