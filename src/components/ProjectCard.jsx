import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      whileHover={{ y: -10 }}
      style={{
        display: "block",
        background: "var(--bg-card)",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        textDecoration: "none",
        color: "inherit",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "200px",
          background: "linear-gradient(135deg, #1e1e24 0%, #2d2d35 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: project.imagePosition || "center",
              transition: "transform 0.4s ease",
            }}
            className="project-image"
          />
        ) : (
          <span style={{ fontSize: "3rem", opacity: 0.2 }}>3D</span>
        )}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "rgba(0,0,0,0.5)",
            padding: "0.5rem",
            borderRadius: "50%",
          }}
        >
          <ExternalLink size={20} color="white" />
        </div>
      </div>

      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.9rem",
            marginBottom: "1rem",
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {project.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                fontSize: "0.75rem",
                padding: "0.25rem 0.75rem",
                borderRadius: "20px",
                background: "rgba(99, 102, 241, 0.1)",
                color: "#818cf8",
                border: "1px solid rgba(99, 102, 241, 0.2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {project.note && (
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.8rem",
              color: "var(--accent-color)",
            }}
          >
            * {project.note}
          </p>
        )}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
