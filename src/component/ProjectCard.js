import { Col } from "react-bootstrap";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = (dataObj) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={dataObj.imgUrl} />
        <div className="proj-txtx">
          <span>{dataObj.techs}</span>
        </div>
      </div>
      <div className="proj-body">
        <h4>{dataObj.title}</h4>
        <p>{dataObj.description}</p>

        <br />
        <button
          onClick={() => window.open(dataObj.link, "_blank")}
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          <BoxArrowUpRight size={18} color="white" style={{ marginRight: 5 }} />
          <span>View Demo</span>
        </button>
        <br />
        <button
          onClick={() => {
            window.open(dataObj.repo, "_blank");
          }}
          style={{
            marginTop: 10,
            marginBottom: 5,
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          <Github size={25} color="white" style={{ marginRight: 5 }} />
          <span>View Repo</span>
        </button>
      </div>
    </Col>
  );
};
