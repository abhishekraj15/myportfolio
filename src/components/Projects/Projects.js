import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EdTech from "../../Assets/Projects/EdTech.png";
import TalkTive from "../../Assets/Projects/TalkTive.png";
import Ravian from "../../Assets/Projects/Ravian.png";
import AstroGanesh from "../../Assets/Projects/Astroganesh.png";
import AVD from "../../Assets/Projects/AVD.png";
import MystryMsg from "../../Assets/Projects/mystry.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the recent projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AstroGanesh}
              isBlog={false}
              title="AstroGanesh"
              description="A platform where users can reach India's top astrologers and chat for solving problems . API integration , aimed
at optimization of functionality and improving performance of the platform. Chatting feature has been
enhanced which delivers a seamless and engaging user experience to the astrology enthusiasts. Contributed
towards success of the platform by improving and developing astrologer services. Demonstrated strong
collaboration and teamwork, fostering innovation and achievement of project goals. Skills involved : React,
Tailwind CSS, React.js, Next.js"
              ghLink={false}
              demoLink="https://astroganesh.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EdTech}
              isBlog={false}
              title="EdTech"
              description="Developed an EdTech platform that connects students with diverse courses and empowers instructors to create, manage, and sell content.Designed An intuitive user interface through which students can easily look and enroll in courses available based on advanced filters or short course descriptions.Built an instructor dashboard for uploading course materials, setting their pricing, and tracking their sales performance. Secured payment systems, interactive forums for dialogue , live Q&A 's , and review functionalities improve user engagement. Delivering a seamless and scalable platform to support e-learning and instructor growth."
              ghLink="https://github.com/abhishekraj15/edTechNotion"
              demoLink="https://edtechnotion.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ravian}
              isBlog={false}
              title="Ravian"
              description="Developed a static website for the Ravian AI Platform using Next.js and Tailwind CSS , focusing on
transforming data into smart decisions with specialized AI agents . Deployed on Vercel for fast, reliable
performance. Skills involved : Tailwind CSS, Next.js."
              ghLink={false}
              demoLink="https://ravian.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalkTive}
              isBlog={false}
              title="TalkTive"
              description="Basic Chat Application featuring real-time messaging using Socket.IO. This application enables seamless communication between users by implementing WebSocket technology for instant message delivery. It includes features like user authentication, private and group chats, and a responsive design for an optimal user experience across devices. "
              ghLink="https://github.com/abhishekraj15/chatApplication"
              demoLink="https://talk-to-tive.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AVD}
              isBlog={false}
              title="AVD Staffing"
              description="AVD Staffing is a dynamic and innovative recruitment company, unwaveringly committed to delivering exceptional HR solutions tailored specifically to the low to mid-level management sector. Our dedicated team is driven by a shared passion for excellence and a genuine enthusiasm for providing our clients with the best possible service. "
              //ghLink="https://github.com/abhishekraj15/music-academy-nextLevelUi"
              demoLink="https://www.avdstaffing.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MystryMsg}
              isBlog={false}
              title="MystryMsg"
              description="With this project, Generate a unique link to share, allowing anyone to send you anonymous feedback and messages.Check them out on your dashboard. 📷"
              ghLink="https://github.com/abhishekraj15/mystryMessages"
              demoLink="https://mystry-messages-flame.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
