import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";

const techs = [
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <TbBrandTailwind />, name: "Tailwind CSS" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <TbBrandNextjs />, name: "Next.js" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <FaAws />, name: "AWS" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, idx) => (
        <Col xs={4} md={2} className="tech-icons" key={idx}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${idx}`}>{tech.name}</Tooltip>}
          >
            <div>{tech.icon}</div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
