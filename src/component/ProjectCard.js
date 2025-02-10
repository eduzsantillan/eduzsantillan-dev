import { Col } from "react-bootstrap";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";
import { motion } from "framer-motion";

export const ProjectCard = (dataObj) => {
  return (
    <Col size={12} sm={6} md={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: dataObj.index * 0.2 }}
      >
        <div className="proj-imgbx">
          <motion.img 
            src={dataObj.imgUrl} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className="proj-txtx"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <span>{dataObj.techs}</span>
          </motion.div>
        </div>
        <motion.div 
          className="proj-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: (dataObj.index * 0.2) + 0.2 }}
        >
          <h4>{dataObj.title}</h4>
          <p>{dataObj.description}</p>

          <br />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open(dataObj.link, "_blank")}
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            <BoxArrowUpRight size={18} color="white" style={{ marginRight: 5 }} />
            <span>View Demo</span>
          </motion.button>
          <br />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          </motion.button>
        </motion.div>
      </motion.div>
    </Col>
  );
};
