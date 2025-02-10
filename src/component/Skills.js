import { motion } from "framer-motion";
import { useState } from "react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      primary: ["Java", "JavaScript", "SQL"],
      secondary: ["C#", "Visual Basic", "Python"],
      icon: "💻"
    },
    {
      title: "Frameworks/Libraries",
      primary: ["Spring Framework", "Spring Boot", "ReactJS", "ExpressJS", "NextJS"],
      secondary: ["Angular"],
      icon: "🛠️"
    },
    {
      title: "Databases",
      primary: ["PostgreSQL", "MongoDB", "Aurora", "MySQL", "Oracle", "SQLServer"],
      icon: "🗄️"
    },
    {
      title: "Tools",
      primary: ["AWS", "GCP", "Firebase", "ElasticSearch", "Docker", "Kubernetes", "Kafka"],
      icon: "⚙️"
    },
    {
      title: "Practices",
      primary: ["Scrum", "TDD", "SOLID Principles", "Software Architecture"],
      icon: "📋"
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.div 
              className="skill-bx wow zoomIn"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Skills</h2>
              <p>
                Experienced Software Engineer with a proven track record in developing high-quality software solutions. 
                Focused on delivering value through modern technologies and best practices.
              </p>
              
              <div className="skills-grid">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    className="skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-card-header">
                      <span className="skill-icon">{category.icon}</span>
                      <h3>{category.title}</h3>
                    </div>
                    <div className="skill-card-content">
                      <div className="primary-skills">
                        {category.primary.map((skill, i) => (
                          <motion.span
                            key={skill}
                            className="skill-tag"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                      {category.secondary && (
                        <div className="secondary-skills">
                          <p>Also experienced with:</p>
                          {category.secondary.map((skill) => (
                            <span key={skill} className="skill-tag secondary">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
