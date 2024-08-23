import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EdTech from "../../Assets/Projects/EdTech.png";
import MusicSchool from "../../Assets/Projects/MusicSchool.png";
import GithubProfile from "../../Assets/Projects/GithubProfile.png";
import Password from "../../Assets/Projects/Password.png";
import TalkTive from "../../Assets/Projects/TalkTive.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";
import ShoppingCart from "../../Assets/Projects/ShoppingCart.png";
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
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EdTech}
              isBlog={false}
              title="EdTech"
              description="The EdTech platform connects students with diverse courses and provides instructors with tools to create, manage, and sell content. Students can search, purchase, and enroll in courses through an intuitive interface with advanced filters and detailed descriptions. Instructors use a user-friendly dashboard to upload materials, set pricing, and track sales. The platform supports secure payments, interactive features like forums and live Q&A, and course reviews."
              ghLink="https://github.com/abhishekraj15/edTechNotion"
              demoLink="https://edtechnotion.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MusicSchool}
              isBlog={false}
              title="MusicSchool"
              description="Designed and developed a dynamic, user-friendly website for a music school to enhance online presence and streamline student engagement. The project involved creating a responsive, modern interface that adapts across devices."
              ghLink="https://github.com/abhishekraj15/music-academy-nextLevelUi"
              demoLink="https://music-academy-nextlevelui.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AVD}
              isBlog={false}
              title="AVD Staffing"
              description="AVD Staffing is a dynamic and innovative recruitment company, unwaveringly committed to delivering exceptional HR solutions tailored specifically to the low to mid-level management sector Our dedicated team is driven by a shared passion for excellence and a genuine enthusiasm for providing our clients with the best possible service. "
              //ghLink="https://github.com/abhishekraj15/music-academy-nextLevelUi"
              demoLink="https://www.avdstaffing.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TalkTive}
              isBlog={false}
              title="TalkTive"
              description="Basic Chat Application Real time messaging by using socket.io"
              ghLink="https://github.com/abhishekraj15/chatApplication"
              demoLink="https://talk-to-tive.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MystryMsg}
              isBlog={false}
              title="MystryMsg"
              description="Create your unique link, share it, and receive anonymous feedback/messages from anyone. Check them out on your dashboard. 📷"
              ghLink="https://github.com/abhishekraj15/mystryMessages"
              demoLink="https://mystry-messages-flame.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="WeatherApp"
              description="The Weather App is a simple project developed using JavaScript, CSS, and HTML. This project is an interesting project for simply weather forecasting."
              ghLink="https://github.com/abhishekraj15/Weather-App"
              demoLink="https://weather-app1-forecast.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GithubProfile}
              isBlog={false}
              title="GithubProfile"
              description="Create a Dev Detective GitHub Project By using API Call which fetch your GitHub account in front of you."
              ghLink="https://github.com/abhishekraj15/Dev_Detective_Project-Github-"
              demoLink="https://abhishekraj-dev-detective-project.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShoppingCart}
              isBlog={false}
              title="ShoppingCart"
              //description=""

              demoLink="https://coruscating-tarsier-362511.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
