import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);

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

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = project.imgUrl;
          img.onload = () => {
            setLoadedImages((prev) => prev + 1);
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  const loadingProgress = (loadedImages / projects.length) * 100;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Projects</h2>
                  <p>
                    Personal and independents projects besides work experience.
                    Hover over the cards to see used techs and tools.
                  </p>
                  
                  {isLoading ? (
                    <div className="loading-container">
                      <motion.div 
                        className="loading-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${loadingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                      <p>Loading projects... {Math.round(loadingProgress)}%</p>
                    </div>
                  ) : (
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} index={index} {...project} />;
                      })}
                    </Row>
                  )}
                </motion.div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <motion.img 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="background-image-right" 
        src={colorSharp2}
      />
    </section>
  );
};
