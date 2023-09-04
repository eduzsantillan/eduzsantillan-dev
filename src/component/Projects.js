import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "VideoBlog App",
      techs: "ReactJS, Firebase, Bootstrap, MongoDB",
      repo: "https://github.com/eduzsantillan/videoblog-app-front",
      link: "https://videoblog-app.vercel.app/",
      description:
        "Website that allows users to upload videos and share them with the world.",
      imgUrl: projImg1,
    },
    {
      title: "Animal",
      techs:
        "Java17, Springboot 3, ReactJS, AWS Lambdas, AWS APIGateway, AWS Rekognition, AWS S3, AWS Beanstalk",
      repo: "https://github.com/eduzsantillan?tab=repositories",
      link: "https://verifik-app.web.app/",
      description:
        "Webapp that allows users to upload or take pictures of animals and using AI recognize them. Currently recognizes dog breeds.",
      imgUrl: projImg2,
    },
    {
      title: "Todo App",
      techs: "ReactJS, CSS, Bootstrap, AdobeXD",
      repo: "https://github.com/eduzsantillan/todo",
      link: "https://todo-eduzsantillan.vercel.app/",
      description:
        "Simple minimalistic and aesthetic TODO app with some autogenerate recommendations. ",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Personal and independents projects besides work experience.
                    Hover over the cards to see used techs and tools.
                  </p>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
