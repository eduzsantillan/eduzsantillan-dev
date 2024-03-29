import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Experienced Software Engineer with a proven track record in
                analyzing and developing high-quality software solutions.
                Demonstrated ability to gather business requirements, customer
                needs and operations improvement to translate them to tech
                assets. Focus on give value and business goal oriented. Excited
                to work on new projects and contribute to a team's success.
              </p>
              <Carousel
                responsive={responsive}
                autoPlay
                autoPlaySpeed={1000}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Amazon Web Services</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Spring Framework</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>.NET Framework</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Devops</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
